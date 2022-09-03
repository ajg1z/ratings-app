import React from "react";
import { IButtonIconProps } from "./ButtonIcon.types";
import Icons from "./icons";
import styles from "./ButtonIcon.module.css";
import cn from "classnames";

export const ButtonIcon: React.FC<IButtonIconProps> = ({
	icon,
	variant,
	className,
	...args
}) => {
	const IconComponent = Icons[icon];
	return (
		<button
			className={cn(className, styles.btn, {
				[styles.primary]: variant === "primary",
				[styles.white]: variant === "white",
			})}
			{...args}
		>
			<IconComponent />
		</button>
	);
};
