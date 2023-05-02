import { UseFormRegister } from "react-hook-form";

interface ISelect {
    label: string;
    name: string;
    options: Array<string>;
    register?: UseFormRegister<any>;
}

export type { ISelect };
