import React from "react";
import { Menu } from "../Menu/Menu";
import styles from "./Sidebar.module.css";
import { ISidebarProps } from "./Sidebar.types";

export const Sidebar: React.FC<ISidebarProps> = ({ ...args }) => {
	return (
		<div {...args}>
			<Menu />
		</div>
	);
};
