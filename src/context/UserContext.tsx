import Router from "next/router";
import { createContext, useState } from "react";
import { decode } from 'jsonwebtoken';
import { setCookie, destroyCookie, parseCookies } from 'nookies';
import { useToast } from "hooks";
import { appVariables } from "_app";
import { APIClient, apiNext } from 'services'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { onMount, ReactChildren, SetState, SetStateBoolean } from "_lib/global";
import { useAppStatus } from "./AppStatusContext";
import { OnEndHandle, TypesManager } from "types";

type TCredentials = {
  email: string;
  password: string;
}

type TokenPayload = {
  username: string;
  email: string;
  avatar: string;
  id: string;
  sub: string;
  exp: number;
  iat: number;
}

interface SignInData extends User {
  isFirstSignin?: boolean;
}

interface SignInDataWithGoogle {
  username: string;
  token: string;
  avatar: string;
  email: string;
  id: string;
}

type User = TypesManager.TUser.Location & {
  username: string;
  token: string;
  avatar: string;
  email: string;
  decode?: TokenPayload;
  id: string;

  phone: string;
  name: string;
  bio: string;

  accountType: 'google' | 'mylook';
}

type UserContextData = {
  user: User | null;
  setUser: SetState<User | null>;

  isAccountConfirm: boolean;
  setIsAccountConfirm: SetStateBoolean;

  signIn: ({ token }: SignInData) => void;
  signOut: () => void;

  signInWithGoogle: (props: SignInDataWithGoogle) => void;
  tryLoginWithGoogle: () => void;

  isLoading: boolean;
  setIsLoading: SetStateBoolean;
  isSessionLoading: boolean;

  onFailSignin: () => void;
  onFailSignup: () => void;

  Session: {
    loadProfile: (token: string, activeLoading?: boolean) => Promise<User | {}>;
    updateProfile: (data: any, onEnd: (props: OnEndHandle) => void) => Promise<any>;
    updateCredentials: (data: TCredentials, onEnd: (props: OnEndHandle) => void) => Promise<any>;
    confirmProfile: (data: TCredentials) => Promise<boolean>;
    reset: () => void;
    isActivated: () => boolean;
  }
}

interface UserProviderProps {
  children: ReactChildren;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const { errorToast } = useToast();
  const { AppStatus } = useAppStatus();

  const token = parseCookies(null)[appVariables.cookies.token];
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSessionLoading, setIsSessionLoading] = useState(false);

  const [user, setUser] = useState<User | null>({} as User);

  const [isAccountConfirm, setIsAccountConfirm] = useState(false); // NOTE edit data user

  onMount(() => {
    const loadUserProfile = async () => {
      if (token) {
        await Session.loadProfile(token)
      }
    }

    loadUserProfile()
  })

  const Session = {
    loadProfile: async (token: string, activeLoading = true) => {
      setIsSessionLoading(activeLoading);
     
      const decodeToken = await decode(token) as TokenPayload;

      if (!decodeToken?.email) {
        return
      }

      const result = await apiNext.post(`/session/${String(decodeToken?.id)}`, { email: decodeToken?.email }).then(({ data }) => {
        if (data?.error) {
          errorToast(data?.error);
          setIsSessionLoading(false);
          Session.reset();
          return { };
        }
      
        if (data?.message) {
          const session = { ...data?.user, decode: decode(data?.user?.token) }
          Session.set(session)
          setIsSessionLoading(false);
          return session;
        }
      }).catch(() => setIsSessionLoading(false));

      return result
    },
    reset: () => {
      setUser(null);
    
      destroyCookie(undefined, appVariables.cookies.username);
      destroyCookie(undefined, appVariables.cookies.token);
      destroyCookie(undefined, appVariables.cookies.user);

      setIsAccountConfirm(false);
      setIsLoading(false);
    },
    set: (newUser: User) => {
      setUser(newUser);
      setCookie(undefined, appVariables.cookies.token, newUser?.token, {
        maxAge: 60 * 60 * 24,
        path: '/'
      });
      setIsLoading(false);
    },
    isActivated: () => {
      if (!user) {
        return false
      } else {
        const is = Object.keys(user as User).length > 0 ? true : false
        return is
      }
    },
    updateProfile: async (data: any, onEnd: (props: OnEndHandle) => void) => {
      const result = await APIClient.User.update(data).then(async ({ data }) => {
        if (data?.error) {
          onEnd({ err: data?.error })
          return;
        }
  
        if (data?.message) {
          setTimeout(async () => {
            await Session.loadProfile(data?.user?.token, false).then(() => onEnd({ status: 'done' }));
          }, 2000)
  
          return;
        }
      }).catch(() => onEnd({ err: 'Unexpected error, contact support.' }));

      return result
    },
    confirmProfile: async ({ password, email }: TCredentials): Promise<boolean> => {
      const result = await APIClient.User.confirmAccount({ email, password });

      return result?.data?.isAccountConfirm || false
    },
    updateCredentials: async (data: TCredentials, onEnd: (props: OnEndHandle) => void) => {
      const result = await APIClient.User.updateCredentials({ ...data, id: user?.id }).then(async ({ data }) => {
        if (data?.error) {
          onEnd({ err: data?.error })
          return;
        }
  
        if (data?.message) {
          setTimeout(async () => {
            await Session.loadProfile(data?.user?.token, false).then(() => onEnd({ status: 'done' }));
          }, 2000);
  
          return;
        }
      }).catch(() => onEnd({ err: 'Unexpected error, contact support.' }));

      return result
    },
  }

  function signOut() {
    setIsLoading(true);

    if (!isAccountConfirm) {
      errorToast('You have been logged out');
    }

    Router.push('/');
    Session.reset();
    
    return;
  }

  function signIn({ token, isFirstSignin = false, ...rest }: SignInData) {
    setIsLoading(true);

    const decodeToken = decode(token) as TokenPayload;

    const { username, email, id, avatar } = decodeToken;

    const user: User = {
      ...rest,
      username,
      token,
      avatar,
      email,
      id,
      decode: decodeToken,
      accountType: 'mylook'
    };

    Session.set(user);
    Router.push(!isFirstSignin ? '/' : '/welcome');
    
    return;
  }

  async function signInWithGoogle({ token, username, avatar, email, id }: SignInDataWithGoogle) {
    AppStatus.set('loading');

    const user = {
      username,
      token,
      avatar,
      email,
      id,
      bio: "",
      phone: "",
      name: "",
      cep: "",
      street: "",
      city: "",
      complement: "",
      additional_information: "",
      accountType: "google",
      provider: 'google'
    };

    await apiNext.post('/users/signup', user).then(async ({ data }) => {
      if (data?.error) {
        AppStatus.set('none');
        return;
      }
    
      if (data?.message) {
        await Session.loadProfile(data?.token, false).then(() => {
          AppStatus.set('done');
          setTimeout(() => {
            Router.push('/');
          }, 1000);
        });
      }
    }).catch(async (data) => {
      if (data?.token) {
        await Session.loadProfile(data?.token, false).then(() => {
          AppStatus.set('done');
          setTimeout(() => {
            Router.push('/');
          }, 1000);
        });
      } else {
        AppStatus.set('none');
        onFailSignin();
      }
    })

    setIsLoading(false);
  }

  async function tryLoginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const token = credential?.accessToken;
        const user = result.user;

        signInWithGoogle({ 
          username: String(user?.displayName),
          avatar: String(user?.photoURL),
          email: String(user?.email),
          id: user?.uid,
          token: String(token)
        });
      }).catch(onFailSignin);

    setIsLoading(false);
  }

  const onFailSignin = () => errorToast('Unexpected error. Unable to signin the user.');
  const onFailSignup = () => errorToast('Unexpected error. Unable to register the user.');
  
  return (
    <UserContext.Provider value={{
      user,
      setUser,
      isAccountConfirm,
      setIsAccountConfirm,
      signIn,
      signOut,
      isLoading,
      setIsLoading,
      onFailSignin,
      onFailSignup,
      signInWithGoogle,
      isSessionLoading,
      Session,
      tryLoginWithGoogle
    }}>
      {children}
    </UserContext.Provider>
  );
};
