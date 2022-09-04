import React from "react";
import { IFooterProps } from "./Footer.types";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export const Footer: React.FC<IFooterProps> = ({ className, ...args }) => {
	return (
		<footer role="footer" className={cn(styles.footer, className)} {...args}>
			<p className={styles.left}>
				OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены
			</p>
			<ul className={styles.menu}>
				<li className={styles["menu-item"]}>
					<a href="#">Пользовательское соглашение</a>
				</li>
				<li className={styles["menu-item"]}>
					<a href="#">Политика конфиденциальности</a>
				</li>
			</ul>
		</footer>
	);
};
