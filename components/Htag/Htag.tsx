import React from "react";
import { IHtagProps } from "./Htag.types";
import styles from "./Htag.module.css";

export const Htag: React.FC<IHtagProps> = ({
	children,
	tag,
	className,
	...args
}): JSX.Element => {
	switch (tag) {
		case "h1":
			return (
				<h1 className={(styles.h1, className)} {...args}>
					{children}
				</h1>
			);
		case "h2":
			return (
				<h2 className={(styles.h2, className)} {...args}>
					{children}
				</h2>
			);
		case "h3":
			return (
				<h3 className={(styles.h3, className)} {...args}>
					{children}
				</h3>
			);
		case "h4":
			return <h4>{children}</h4>;
		case "h5":
			return <h5>{children}</h5>;
		case "h6":
			return <h6>{children}</h6>;
		default:
			return <></>;
	}
};
