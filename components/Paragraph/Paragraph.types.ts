import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IParagraphProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	size?: ParagraphType;
	children?: ReactNode;
}

export type ParagraphType = "large" | "small" | "medium";
