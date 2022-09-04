import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import Icons from "./icons";

export interface IButtonIconProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	icon: keyof typeof Icons;
	variant: "primary" | "white";
}
