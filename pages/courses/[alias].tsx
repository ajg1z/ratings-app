import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { withLayout } from "../../layout/layout";
import axios from "axios";
import { IMenuItem } from "../../interfaces/menu.interface";
import {
	ITopPageAdvantage,
	ITopPageModel,
} from "../../interfaces/top-page.interface";
import { IProductModel } from "../../interfaces/product.interface";

const FirstCategory = 0;

const Course = ({ firstCategory, menu, page, products }: ICourseProps) => {
	return (
		<>
			{products.map((p) => {
				return <div key={p._id}>{p.description}</div>;
			})}
		</>
	);
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const { data: menu } = await axios.post<IMenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
		{ firstCategory: FirstCategory }
	);

	return {
		fallback: true,
		paths: menu.flatMap((m) => m.pages.map((p) => `/courses/` + p.alias)),
	};
};

export const getStaticProps: GetStaticProps<ICourseProps> = async ({
	params,
}) => {
	if (!params) {
		return {
			notFound: true,
		};
	}
	const { data: menu } = await axios.post<IMenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
		{ firstCategory: FirstCategory }
	);

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
			firstCategory: FirstCategory,
			page,
			products,
		},
	};
};

interface ICourseProps extends Record<string, unknown> {
	menu: IMenuItem[];
	firstCategory: number;
	page: ITopPageModel;
	products: IProductModel[];
}
