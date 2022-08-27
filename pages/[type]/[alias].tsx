import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { withLayout } from "../../layout/layout";
import axios from "axios";
import { IMenuItem } from "../../interfaces/menu.interface";
import {
	ITopPageAdvantage,
	ITopPageModel,
	TopLevelCategory,
} from "../../interfaces/top-page.interface";
import { IProductModel } from "../../interfaces/product.interface";
import { FirstLevelMenu } from "../../layout/Menu/Menu";
import { TopPageComponent } from "../../page-components/index";

const TopPage = ({ firstCategory, page, products }: ITopPageProps) => {
	return (
		<TopPageComponent
			firstCategory={firstCategory}
			page={page}
			products={products}
		/>
	);
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	let paths: string[] = [];
	for (let firstLevel of FirstLevelMenu) {
		const { data: menu } = await axios.post<IMenuItem[]>(
			process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
			{ firstCategory: firstLevel.id }
		);
		paths = paths.concat(
			menu.flatMap((m) => m.pages.map((p) => `/${firstLevel.route}/${p.alias}`))
		);
	}
	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<ITopPageProps> = async ({
	params,
}) => {
	if (!params) {
		return {
			notFound: true,
		};
	}

	const firstCategoryItem = FirstLevelMenu.find(
		(options) => options.route === params.type
	);

	if (!firstCategoryItem) {
		return {
			notFound: true,
		};
	}

	try {
		const { data: menu } = await axios.post<IMenuItem[]>(
			process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
			{ firstCategory: firstCategoryItem.id }
		);

		if (!menu.length)
			return {
				notFound: true,
			};

		const { data: page } = await axios.get<ITopPageModel>(
			process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias
		);

		const { data: products } = await axios.post<IProductModel[]>(
			process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find/",
			{
				category: page.category,
				limit: 10,
			}
		);

		return {
			props: {
				menu,
				firstCategory: firstCategoryItem.id,
				page,
				products,
			},
		};
	} catch (e) {
		console.warn(e);
		return {
			notFound: true,
		};
	}
};

interface ITopPageProps extends Record<string, unknown> {
	menu: IMenuItem[];
	firstCategory: TopLevelCategory;
	page: ITopPageModel;
	products: IProductModel[];
}
