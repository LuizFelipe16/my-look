import { Dispatch, ReactNode, SetStateAction } from "react";

export type ReactComponent = ReactNode;

export type useStateAction<T> = Dispatch<SetStateAction<T>> | undefined

export type stateActionBoolean = Dispatch<SetStateAction<boolean>> | undefined
