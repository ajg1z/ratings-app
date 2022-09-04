import React, { FC } from "react";
import { ILayoutProps } from "./layout.types";
import styles from "./layout.module.css";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { AppContextProvider, IAppContext } from "../context/app.context";
import { Up } from "../components";
import cn from "classnames";

const Layout: React.FC<ILayoutProps> = ({ children }) => {
	const [toContentTabIndex, setToContentTabIndex] = React.useState(false);
	const bodyRef = React.useRef<HTMLDivElement | null>(null);
	return (
		<div className={styles.container}>
			<a
				onBlur={() => setToContentTabIndex(false)}
				className={cn(styles.toContentTabIndex, {
					[styles.visible]: toContentTabIndex,
				})}
				onKeyDown={(e) => {
					if (e.code === "Space" || e.code === "Enter") {
						e.preventDefault();
						bodyRef.current?.focus();
					}
					setToContentTabIndex(false);
				}}
				onFocus={() => {
					setToContentTabIndex(true);
				}}
				tabIndex={1}
			>
				Сказу к содержимому
			</a>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<main role="main" tabIndex={0} ref={bodyRef} className={styles.body}>
				{children}
			</main>
			<Footer className={styles.footer} />
			<Up />
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
