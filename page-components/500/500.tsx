import router from "next/router";
import styles from "./500.module.css";
import { Htag, Paragraph, Button } from "../../components";

export const ErrorPage = () => {
	return (
		<div className={styles.container}>
			<Htag className={styles.title} tag="h1">
				Error 500
			</Htag>
			<Paragraph size="large">то-то пошло не так...</Paragraph>
			<div className={styles.actions}>
				<Button onClick={() => router.back()} variant="outlined">
					назад
				</Button>
				<Button onClick={() => router.push("/")} variant="outlined">
					на главную
				</Button>
			</div>
		</div>
	);
};
