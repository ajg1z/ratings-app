import type { GetStaticPaths, GetStaticProps } from "next";
import { withLayout } from "../../layout/layout";
import axios from "axios";
import { IMenuItem } from "../../interfaces/menu.interface";
import { TopLevelCategory } from "../../interfaces/top-page.interface";
import { FirstLevelMenu } from "../../layout/Menu/Menu";
import { API } from "../../helpers/api";
import Head from "next/head";

const TypeRoot = ({ firstCategory }: ITypeRootProps) => {
	return (
		<>
			<Head>
				<title>{firstCategory}</title>
			</Head>
			<h1>Выберите пункт меню</h1>
		</>
	);
};

export default withLayout(TypeRoot);

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: FirstLevelMenu.map((menu) => `/${menu.route}`),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<ITypeRootProps> = async ({
	params,
}) => {
	if (!params) {
		return {
			notFound: true,
		};
	}

	const firstLevelCategory = FirstLevelMenu.find(
		(m) => m.route === params.type
	);

	if (!firstLevelCategory) {
		return {
			notFound: true,
		};
	}

	try {
		const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
			firstCategory: firstLevelCategory.id,
		});

		return {
			props: {
				menu,
				firstCategory: firstLevelCategory.id,
			},
		};
	} catch (e) {
		console.warn(e);
		return {
			notFound: true,
		};
	}
};

interface ITypeRootProps extends Record<string, unknown> {
	menu: IMenuItem[];
	firstCategory: TopLevelCategory;
}
