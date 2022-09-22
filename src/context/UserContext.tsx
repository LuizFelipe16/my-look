import Router from "next/router";
import { createContext, useState } from "react";
import { decode } from 'jsonwebtoken';
import { setCookie, destroyCookie, parseCookies } from 'nookies';
import { useToast } from "hooks";
import { appVariables } from "_app";
import { apiNext } from 'services'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { onMount, ReactChildren, SetState, SetStateBoolean } from "_lib/global";
import { useAppStatus } from "./AppStatusContext";

type TokenPayload = {
  username: string;
  email: string;
  avatar: string;
  id: string;
  sub: string;
  exp: number;
  iat: number;
}

interface SignInData {
  token: string;
  isFirstSignin?: boolean;

  phone: string;
  name: string;
  bio: string;
}

interface SignInDataWithGoogle {
  username: string;
  token: string;
  avatar: string;
  email: string;
  id: string;
}

type User = {
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
  user: User;
  setUser: SetState<User>;

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
    reset: () => void;
  }
}

interface UserProviderProps {
  children: ReactChildren;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const { errorToast, successToast } = useToast();
  const { AppStatus } = useAppStatus();

  const token = parseCookies(null)[appVariables.cookies.token];
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSessionLoading, setIsSessionLoading] = useState(false);

  const [user, setUser] = useState<User>({} as User);

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
      const resetUser: User = {
        username: '', 
        token: '', 
        avatar: '', 
        email: '', 
        id: '', 
        phone: '',
        bio: '',
        name: '',
        decode: {} as TokenPayload,
        accountType: 'mylook'
      }

      setUser(resetUser);
    
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
    }
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

  function signIn({ token, isFirstSignin = false, name, phone, bio }: SignInData) {
    setIsLoading(true);

    const decodeToken = decode(token) as TokenPayload;

    const { username, email, id, avatar } = decodeToken;

    const user: User = {
      username,
      token,
      avatar,
      email,
      id,
      decode: decodeToken,
      bio,
      phone,
      name,
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
