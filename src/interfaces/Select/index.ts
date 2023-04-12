import { UseFormRegister } from "react-hook-form";
import { IRegister } from "../Login";

interface ISelect {
    label: string;
    name:
        | "name"
        | "email"
        | "contact"
        | "bio"
        | "password"
        | "course_module"
        | "passwordMatch";
    options: Array<string>;
    register: UseFormRegister<IRegister>;
}

export type { ISelect };
