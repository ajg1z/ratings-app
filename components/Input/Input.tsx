import cn from "classnames";
import React from "react";
import styles from "./Input.module.css";
import { IInputProps } from "./Input.types";

export const Input: React.FC<IInputProps> = ({ className, ...args }) => {
	return <input {...args} className={cn(styles.input, className)} />;
};
