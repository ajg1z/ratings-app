import React from "react";
import { ITagProps } from "./Tag.types";
import cn from "classnames";
import styles from "./Tag.module.css";

export const Tag: React.FC<ITagProps> = ({
	children,
	size = "small",
	color = "ghost",
	className,
	href,
	...args
}) => {
	return (
		<div
			className={cn(styles.tag, className, {
				[styles.medium]: size === "medium",
				[styles.small]: size === "small",
				[styles.ghost]: color === "ghost",
				[styles.red]: color === "red",
				[styles.grey]: color === "grey",
				[styles.green]: color === "green",
				[styles.primary]: color === "primary",
			})}
			{...args}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};
