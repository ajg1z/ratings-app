import React, { useEffect } from "react";
import styles from "./Up.module.css";
import useScrollY from "../../hooks/useScrollY";
import { useAnimation, motion } from "framer-motion";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const Up = () => {
	const scrollY = useScrollY();
	const controls = useAnimation();

	useEffect(() => {
		controls.start({ opacity: scrollY / document.body.scrollHeight });
	}, [scrollY, controls]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<motion.div
			animate={controls}
			initial={{ opacity: 0 }}
			className={styles.up}
			onClick={scrollToTop}
		>
			<ButtonIcon variant="primary" icon="up" />
		</motion.div>
	);
};
