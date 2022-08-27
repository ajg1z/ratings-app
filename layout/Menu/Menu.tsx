import React, { useContext } from "react";
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
	const { asPath } = useRouter();

	const openSecondLevel = (secondLevel: string) => {
		setMenu &&
			setMenu(
				menu.map((m) => {
					if (m._id.secondCategory === secondLevel) m.isOpened = !m.isOpened;
					return m;
				})
			);
	};

	const buildFirstLevel = () => {
		return (
			<>
				{FirstLevelMenu.map((m) => {
					return (
						<div className={styles.firstLevelWrapper} key={m.id}>
							<Link href={`/${m.route}`}>
								<a>
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
						<div key={m._id.secondCategory}>
							<div
								onClick={(e) => openSecondLevel(m._id.secondCategory)}
								className={cn(styles.secondLevel, {
									[styles.secondLevelActive]: m.isOpened,
								})}
							>
								{m._id.secondCategory}
							</div>
							{m.isOpened && buildThirdLevel(m.pages, selectedMenu.route)}
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdLevel = (pages: IPageItem[], route: string) => {
		return pages.map((page, i) => (
			<Link href={`/${route}/${page.alias}`}>
				<a
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
