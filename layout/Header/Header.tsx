import React from "react";
import { IHeaderProps } from "./Header.types";
import styles from "./Header.module.css";

export const Header: React.FC<IHeaderProps> = ({ ...args }) => {
	return <header {...args}>Header</header>;
};
