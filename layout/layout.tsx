import React, { FC } from "react";
import { ILayoutProps } from "./layout.types";
import styles from "./layout.module.css";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { AppContextProvider, IAppContext } from "../context/app.context";

const Layout: React.FC<ILayoutProps> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<main className={styles.body}>{children}</main>
			<Footer className={styles.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
	Component: FC<T>
) => {
	return function withLayoutComponent(props: T) {
		return (
			<AppContextProvider firstCategory={props.firstCategory} menu={props.menu}>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		);
	};
};
