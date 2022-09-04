import type { GetStaticProps } from "next";
import { Htag } from "../components";
import { withLayout } from "../layout/layout";
import axios from "axios";
import { IMenuItem } from "../interfaces/menu.interface";
import { ErrorPage } from "../page-components/500/500";

const Home = (props: IHomeProps) => {
	if (props.error) return <ErrorPage />;
	return (
		<>
			<Htag title="HTag" tag="h1">
				Rating
			</Htag>
		</>
	);
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
	const firstCategory = 2;
	try {
		const { data: menu } = await axios.post<IMenuItem[]>(
			process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
			{ firstCategory }
		);
		return {
			props: {
				menu,
				firstCategory,
			},
		};
	} catch (e) {
		return {
			props: { error: true },
		};
	}
};

interface IHomeProps extends Record<string, unknown> {
	menu?: IMenuItem[];
	firstCategory?: number;
	error?: boolean;
}
