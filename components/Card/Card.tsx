import cn from "classnames";
import React from "react";
import styles from "./Card.module.css";
import { ICardProps } from "./Card.types";

export const Card: React.FC<ICardProps> = ({
	children,
	className,
	color = "white",
	...args
}) => {
	return (
		<div
			{...args}
			className={cn(styles.card, className, {
				[styles.blue]: color === "blue",
			})}
		>
			{children}
		</div>
	);
};
