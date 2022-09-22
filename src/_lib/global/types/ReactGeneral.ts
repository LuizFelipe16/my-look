import { Dispatch, ReactNode, SetStateAction, MouseEventHandler } from "react";

export type ReactComponent = ReactNode;

export type ReactChildren = ReactNode;

export type useStateAction<T> = Dispatch<SetStateAction<T>> | undefined

export type SetState<T> = Dispatch<SetStateAction<T>>

export type SetStateBoolean = Dispatch<SetStateAction<boolean>>

export type stateActionBoolean = Dispatch<SetStateAction<boolean>> | undefined

export type ClickElement<T> = MouseEventHandler<T>
