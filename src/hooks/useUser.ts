import { useContext } from "react";
import { UserContext } from "context";

export const useUser = () => useContext(UserContext);

export const useProfile = () => useContext(UserContext);
