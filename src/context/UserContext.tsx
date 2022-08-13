import Router from "next/router";
import { Dispatch, SetStateAction, createContext, ReactNode, useState } from "react";
import { decode } from 'jsonwebtoken';
import { setCookie, destroyCookie, parseCookies } from 'nookies';
import { useToast } from "hooks";
import { appVariables } from "_app";

type TokenPayload = {
  username: string;
  email: string;
  sub: string;
  exp: number;
  iat: number;
}

interface SignInData {
  token: string;
  isFirstSignin?: boolean;
}

type User = {
  username: string;
  token: string;
  decode: TokenPayload;
}

type UserContextData = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;

  isAccountConfirm: boolean;
  setIsAccountConfirm: Dispatch<SetStateAction<boolean>>;

  signIn: ({ token }: SignInData) => void;
  signOut: () => void;

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

  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState<User>(() => {
    const decodeToken = decode(token) as TokenPayload;

    return {
      username: !username ? "" : username,
      token: !token ? "" : token,
      decode: !token ? {} : decodeToken
    } as User
  });

  const [isAccountConfirm, setIsAccountConfirm] = useState(false); // edit data user

  function signOut(): void {
    setIsLoading(true);

    if (!isAccountConfirm) {
      errorToast('You have been logged out');
    }

    setIsAccountConfirm(false);
    setUser({ username: "", token: "", decode: {} as TokenPayload });
    destroyCookie(undefined, appVariables.cookies.username);
    destroyCookie(undefined, appVariables.cookies.token);

    Router.push('/');
    setIsLoading(false);

    return;
  }

  function signIn({ token, isFirstSignin = false }: SignInData): void {
    setIsLoading(true);

    const decodeToken = decode(token) as TokenPayload;

    const { username } = decodeToken;

    setCookie(undefined, appVariables.cookies.username, username, {
      maxAge: 60 * 60 * 24,
      path: '/'
    });

    setCookie(undefined, appVariables.cookies.token, token, {
      maxAge: 60 * 60 * 24,
      path: '/'
    });

    setUser({
      username,
      token,
      decode:
        decodeToken
    });

    Router.push(!isFirstSignin ? '/' : '/welcome');
    setIsLoading(false);

    return;
  }

  const onFailSignin = () => errorToast('Unexpected error. Unable to signin the user.')
  const onFailSignup = () => errorToast('Unexpected error. Unable to register the user.')
  
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
      onFailSignup
    }}>
      {children}
    </UserContext.Provider>
  );
}