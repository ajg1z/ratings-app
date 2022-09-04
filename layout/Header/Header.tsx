import React from "react";
import { IHeaderProps } from "./Header.types";
import styles from "./Header.module.css";
import Logo from "./logo.svg";
import { ButtonIcon } from "../../components";
import cn from "classnames";
import { motion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useRouter } from "next/router";

export const Header: React.FC<IHeaderProps> = ({ className, ...args }) => {
	const router = useRouter();
	const variants = {
		opened: {
			opacity: 1,
			x: 0,
		},
		close: {
			x: "100%",
			opacity: 0,
		},
	};

	const [isOpened, setIsOpened] = React.useState(false);

	React.useEffect(() => {
		setIsOpened(false);
	}, [router]);

	const handleToggleMenu = (value: boolean) => {
		if (value) {
			setIsOpened(true);
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
			setIsOpened(false);
		}
	};

	return (
		<header role="header" className={cn(className, styles.container)} {...args}>
			<Logo />
			<ButtonIcon
				onClick={() => handleToggleMenu(true)}
				icon="menu"
				variant="white"
			/>
			<motion.div
				variants={variants}
				initial="close"
				animate={isOpened ? "opened" : "close"}
				className={styles.mobMenu}
			>
				<Sidebar />
				<ButtonIcon
					onClick={() => handleToggleMenu(false)}
					className={styles.menuClose}
					variant="white"
					icon="close"
				/>
			</motion.div>
		</header>
	);
};
