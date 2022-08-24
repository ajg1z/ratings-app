import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { Htag, Button, Paragraph, Tag, Rating } from "../components";
import { withLayout } from "../layout/layout";
import axios from "axios";
import { IMenuItem } from "../interfaces/menu.interface";

const Home = ({ firstCategory, menu }: IHomeProps) => {
	const [rating, setRating] = useState(5);
	return (
		<>
			<Htag title="HTag" tag="h1">
				Rating
			</Htag>

			<Rating isEditable rating={rating} setRating={setRating} />
		</>
	);
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async (e) => {
	const firstCategory = 0;
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
};

interface IHomeProps extends Record<string, unknown> {
	menu: IMenuItem[];
	firstCategory: number;
}
