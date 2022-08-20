import { ReactNode } from "react";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	size?: "medium" | "small";
	color?: "ghost" | "red" | "grey" | "green" | "primary";
	href?: string;
}
