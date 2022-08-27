import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { withLayout } from "../layout/layout";

const Search = ({ firstCategory, menu, page, products }: ISearchProps) => {
	return (
		<>
			<h1>Search</h1>
		</>
	);
};

export default withLayout(Search);

interface ISearchProps extends Record<string, unknown> {}
