import { UseFormRegister, FieldErrors, Field } from "react-hook-form";
import { IRegister, ILogin } from "../Login";

interface IInput {
    label: string;
    // name:
    //     | "name"
    //     | "email"
    //     | "contact"
    //     | "bio"
    //     | "password"
    //     | "course_module"
    //     | "passwordMatch";
    name: string;
    register?: UseFormRegister<any>;
    errors?: any;
    placeholder: string;
    type?: "default" | "password";
}

export type { IInput };
