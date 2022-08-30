import cn from "classnames";
import React, { ForwardedRef, forwardRef } from "react";
import styles from "./Card.module.css";
import { ICardProps } from "./Card.types";

export const Card = forwardRef(
	(
		{ children, className, color = "white", ...args }: ICardProps,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		return (
			<div
				ref={ref}
				{...args}
				className={cn(styles.card, className, {
					[styles.blue]: color === "blue",
				})}
			>
				{children}
			</div>
		);
	}
);
