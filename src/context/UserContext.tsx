import Router from "next/router";
import { Dispatch, SetStateAction, createContext, ReactNode, useState } from "react";
import { decode } from 'jsonwebtoken';
import { setCookie, destroyCookie, parseCookies } from 'nookies';
import { useToast } from "hooks";
import { appVariables } from "_app";

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
  avatar?: string;
  email?: string;
  decode?: TokenPayload;
  id?: string;

  phone: string;
  name: string;
  bio: string;

  accountType: 'google' | 'mylook';
}

type UserContextData = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;

  isAccountConfirm: boolean;
  setIsAccountConfirm: Dispatch<SetStateAction<boolean>>;

  signIn: ({ token }: SignInData) => void;
  signOut: () => void;

  signInWithGoogle: (props: SignInDataWithGoogle) => void;

  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;

  onFailSignin: () => void;
  onFailSignup: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const { errorToast } = useToast();

  const cookies = parseCookies(null);

  const username = cookies[appVariables.cookies.username];
  const token = cookies[appVariables.cookies.token];
  const userCookie = cookies[appVariables.cookies.user];
  
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState<User>(() => {
    const decodeToken = decode(token) as TokenPayload;
    const data = !userCookie ? '' : JSON.parse(userCookie) as User;

    const newUser: User = {
      username: !username ? '' : username,
      token: !token ? '' : token,
      avatar: !data ? '' : data.avatar,
      email: !data ? '' : data.email,
      id: !data ? '' : data.id,
      decode: !token ? {} as TokenPayload : decodeToken,
      bio: !data ? '' : data.bio,
      name: !data ? '' : data.name,
      accountType: !data ? 'mylook' : data.accountType,
      phone: !data ? '' : data.phone,
    };

    return newUser;
  });

  const [isAccountConfirm, setIsAccountConfirm] = useState(false); // edit data user

  function signOut() {
    setIsLoading(true);

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

    if (!isAccountConfirm) {
      errorToast('You have been logged out');
    }

    Router.push('/').then(() => {
      setUser(resetUser);
    
      destroyCookie(undefined, appVariables.cookies.username);
      destroyCookie(undefined, appVariables.cookies.token);
      destroyCookie(undefined, appVariables.cookies.user);
    });
    
    setIsAccountConfirm(false);
    
    setIsLoading(false);
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

    setCookie(undefined, appVariables.cookies.username, username, {
      maxAge: 60 * 60 * 24,
      path: '/'
    });

    setCookie(undefined, appVariables.cookies.token, token, {
      maxAge: 60 * 60 * 24,
      path: '/'
    });

    setCookie(undefined, appVariables.cookies.user, JSON.stringify(user), {
      maxAge: 60 * 60 * 24,
      path: '/'
    });

    setUser(user);

    Router.push(!isFirstSignin ? '/' : '/welcome');
    setIsLoading(false);

    return;
  }

  function signInWithGoogle({ token, username, avatar, email, id }: SignInDataWithGoogle) {
    setIsLoading(true);

    const user: User = {
      username,
      token,
      avatar,
      email,
      id,
      bio: "",
      phone: "",
      name: "",
      accountType: "google",
    };

    setCookie(undefined, appVariables.cookies.username, username, {
      maxAge: 60 * 60 * 24,
      path: '/'
    });

    setCookie(undefined, appVariables.cookies.token, token, {
      maxAge: 60 * 60 * 24,
      path: '/'
    });

    setCookie(undefined, appVariables.cookies.user, JSON.stringify(user), {
      maxAge: 60 * 60 * 24,
      path: '/'
    });

    setUser(user);

    Router.push('/');
    setIsLoading(false);

    return;
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
      signInWithGoogle
    }}>
      {children}
    </UserContext.Provider>
  );
};
