import { ReactNode } from "react";

interface IButton {
	background: string;
	hoverBackground?: string;
	color?: string;
	children: ReactNode;
}

export type { IButton };
