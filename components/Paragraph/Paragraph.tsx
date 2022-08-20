import React from "react";
import styles from "./Paragraph.module.css";
import { IParagraphProps } from "./Paragraph.types";
import cn from "classnames";

export const Paragraph: React.FC<IParagraphProps> = ({
	children,
	size = "medium",
	className,
	...args
}) => {
	return (
		<p
			className={cn(styles.paragraph, className, {
				[styles.large]: size === "large",
				[styles.small]: size === "small",
				[styles.medium]: size === "medium",
			})}
			{...args}
		>
			{children}
		</p>
	);
};
