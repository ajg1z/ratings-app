import cn from "classnames";
import React from "react";
import styles from "./Divider.module.css";
import { IDividerProps } from "./Divider.types";

export const Divider: React.FC<IDividerProps> = ({ className, ...args }) => {
	return <hr {...args} className={cn(className, styles.divider)} />;
};
