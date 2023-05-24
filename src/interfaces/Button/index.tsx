import { ReactNode } from "react";

interface IButton {
    background: string;
    hoverBackground?: string;
    color?: string;
    clickFunction?: Function;
    children: ReactNode;
    id?: string;
    type?: "submit" | "button";
}

export type { IButton };
