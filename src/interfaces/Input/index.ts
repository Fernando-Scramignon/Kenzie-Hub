import { ReactNode } from "react";
import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";

interface IInput {
    label: string;
    name: string;
    register?: UseFormRegister<FieldValues>;
    errors?: FieldErrors<FieldValues>;
    placeholder: string;
    type?: "default" | "password";
}

export type { IInput };
