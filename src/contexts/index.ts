import { IUser } from "../interfaces/User";
import { UserContextType } from "../interfaces/Context";
import { createContext } from "react";

const Context = createContext<UserContextType | null>(null);

export { Context };
