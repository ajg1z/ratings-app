import { ButtonHTMLAttributes } from "react";
import { DetailedHTMLProps, ReactNode } from "react";

export interface IButtinProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children: ReactNode;
	variant?: "fill" | "outlined";
	arrow?: "right" | "down" | "none";
}
