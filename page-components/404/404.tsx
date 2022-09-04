import { useRouter } from "next/router";
import { Button, Htag, Paragraph } from "../../components";
import styles from "./404.module.css";

export const NotFoundPage = () => {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<Htag className={styles.title} tag="h1">
				Error 404
			</Htag>
			<Paragraph size="large">Страница не найдена</Paragraph>
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
