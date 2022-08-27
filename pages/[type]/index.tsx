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

const TypeRoot = ({ firstCategory, menu }: ITypeRootProps) => {
	return (
		<>
			<h1>TypeRoot ${firstCategory}</h1>
		</>
	);
};

export default withLayout(TypeRoot);

export const getStaticPaths: GetStaticPaths = async (ctx) => {
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
		const { data: menu } = await axios.post<IMenuItem[]>(
			process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
			{ firstCategory: firstLevelCategory.id }
		);

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
