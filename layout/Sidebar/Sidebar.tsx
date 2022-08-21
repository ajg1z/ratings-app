import React from "react";
import styles from "./Sidebar.module.css";
import { ISidebarProps } from "./Sidebar.types";

export const Sidebar: React.FC<ISidebarProps> = ({ ...args }) => {
	return <div {...args}>Sidebar</div>;
};
