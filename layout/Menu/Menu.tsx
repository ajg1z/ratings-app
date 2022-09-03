import React, { Fragment, KeyboardEvent, useContext } from "react";
import { AppContext } from "../../context/app.context";
import { TopLevelCategory } from "../../interfaces/top-page.interface";
import { IFirstLevelMenuItem } from "./Menu.types";
import BooksIcon from "./icons/books.svg";
import CoursesIcon from "./icons/courses.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";
import styles from "./Menu.module.css";
import cn from "classnames";
import { IPageItem } from "../../interfaces/menu.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export const FirstLevelMenu: IFirstLevelMenuItem[] = [
	{
		name: "Книги",
		route: "books",
		id: TopLevelCategory.Books,
		icon: <BooksIcon />,
	},
	{
		name: "Сервисы",
		route: "services",
		id: TopLevelCategory.Services,
		icon: <ServicesIcon />,
	},
	{
		name: "Курсы",
		route: "courses",
		id: TopLevelCategory.Courses,
		icon: <CoursesIcon />,
	},
	{
		name: "Продукты",
		route: "products",
		id: TopLevelCategory.Products,
		icon: <ProductsIcon />,
	},
];

export const Menu = () => {
	const { menu, firstCategory, setMenu } = React.useContext(AppContext);
	const { asPath, push } = useRouter();
	const variantsSecondLevel = {
		visible: {
			marginTop: 10,
			marginBottom: 10,
			height: "auto",
		},
		hidden: { marginTop: 0, marginBottom: 0, height: 0 },
	};

	const openSecondLevel = (secondLevel: string) => {
		setMenu &&
			setMenu(
				menu.map((m) => {
					if (m._id.secondCategory === secondLevel) m.isOpened = !m.isOpened;
					return m;
				})
			);
	};

	const handleChangeRoute = (e: KeyboardEvent, route: string) => {
		if (e.code === "Enter" || e.code === "Space") {
			e.preventDefault();
			push(route);
		}
	};

	const buildFirstLevel = () => {
		return (
			<>
				{FirstLevelMenu.map((m) => {
					return (
						<div className={styles.firstLevelWrapper} key={m.id}>
							<Link href={`/${m.route}`}>
								<a onKeyDown={(key) => handleChangeRoute(key, `/${m.route}`)}>
									<div
										className={cn(styles.firstLevel, {
											[styles.firstLevelActive]: firstCategory === m.id,
										})}
									>
										{m.icon}
										<span className={styles.firstLevelName}>{m.name}</span>
									</div>
								</a>
							</Link>
							{m.id === firstCategory && buildSecondLevel(m)}
						</div>
					);
				})}
			</>
		);
	};

	const buildSecondLevel = (selectedMenu: IFirstLevelMenuItem) => {
		return (
			<div className={styles.secondLevelWrapper}>
				{menu.map((m, i) => {
					if (m.pages.map((p) => p.alias).includes(asPath.split("/")[2]))
						m.isOpened = true;
					return (
						<div
							className={cn(
								styles.secondLevelItem,
								m.isOpened && styles.secondLevelItemActive
							)}
							key={m._id.secondCategory}
						>
							<div
								onKeyDown={(e) => {
									if (e.code === "Enter" || e.code === "Space") {
										openSecondLevel(m._id.secondCategory);
										e.preventDefault();
									}
								}}
								tabIndex={0}
								onClick={() => openSecondLevel(m._id.secondCategory)}
								className={cn(styles.secondLevel)}
							>
								{m._id.secondCategory}
							</div>
							<motion.div
								layout
								variants={variantsSecondLevel}
								initial={m.isOpened ? "visible" : "hidden"}
								animate={m.isOpened ? "visible" : "hidden"}
							>
								{buildThirdLevel(
									m.pages,
									selectedMenu.route,
									m.isOpened ?? false
								)}
							</motion.div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdLevel = (
		pages: IPageItem[],
		route: string,
		isOpened: boolean
	) => {
		return pages.map((page, i) => (
			<Link key={page._id} href={`/${route}/${page.alias}`}>
				<a
					tabIndex={isOpened ? 0 : -1}
					onKeyDown={(key) => handleChangeRoute(key, `/${route}/${page.alias}`)}
					key={page._id}
					className={cn(styles.thirdLevel, {
						[styles.thirdLevelActive]: asPath.split("/")[2] === page.alias,
					})}
				>
					{page.category}
				</a>
			</Link>
		));
	};

	return <div className={styles.container}>{buildFirstLevel()}</div>;
};
