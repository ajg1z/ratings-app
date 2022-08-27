import React from "react";
import { Menu } from "../Menu/Menu";
import styles from "./Sidebar.module.css";
import { ISidebarProps } from "./Sidebar.types";
import Logo from "./Logo.svg";
import cn from "classnames";
import { Search } from "../../components";

export const Sidebar: React.FC<ISidebarProps> = ({ className, ...args }) => {
	return (
		<div {...args} className={cn(className, styles.sidebar)}>
			<Logo className={styles.logo} />
			<Search />
			<Menu />
		</div>
	);
};
