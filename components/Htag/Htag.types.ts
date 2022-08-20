import React, {
	BaseHTMLAttributes,
	DetailedHTMLProps,
	HTMLAttributes,
	ReactNode,
} from "react";

export interface IHtagProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	> {
	tag: HtagType;
	children: ReactNode;
}

export type HtagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
