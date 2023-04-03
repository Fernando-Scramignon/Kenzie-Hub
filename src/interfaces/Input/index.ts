import { UseFormRegister, FieldValues } from "react-hook-form";

interface IInput {
    label: string;
    name: string;
    register?: UseFormRegister<FieldValues>;
    placeholder: string;
    type?: "default" | "password";
}

export type { IInput };
