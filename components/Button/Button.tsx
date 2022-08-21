import React from "react";
import styles from "./Button.module.css";
import { IButtinProps } from "./Button.types";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";

export const Button: React.FC<IButtinProps> = ({
	children,
	variant,
	className,
	arrow = "none",
	...args
}) => {
	return (
		<button
			className={cn(
				styles.button,
				className,
				variant === "fill" ? styles.fill : styles.outlined
			)}
			{...args}
		>
			{children}
			{arrow !== "none" && (
				<ArrowIcon
					className={cn(styles.arrow, {
						[styles.down]: arrow === "down",
					})}
				/>
			)}
		</button>
	);
};
