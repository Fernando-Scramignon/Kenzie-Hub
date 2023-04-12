import { ReactNode } from "react";
import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";
import { IRegister } from "../Login";

interface IInput {
    label: string;
    name:
        | "name"
        | "email"
        | "contact"
        | "bio"
        | "password"
        | "course_module"
        | "passwordMatch";
    register?: UseFormRegister<IRegister>;
    errors?: FieldErrors<IRegister>;
    placeholder: string;
    type?: "default" | "password";
}

export type { IInput };
