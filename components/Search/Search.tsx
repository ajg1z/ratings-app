import cn from "classnames";
import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import SearchIcon from "./search.svg";
import { ISearchProps } from "./Search.types";
import styles from "./Search.module.css";
import { useRouter } from "next/router";

export const Search: React.FC<ISearchProps> = ({ className, ...args }) => {
	const [search, setSearch] = React.useState("");
	const router = useRouter();

	const goToSearch = () => {
		if (!search) return;
		router.push({
			pathname: "/search",
			query: {
				q: search,
			},
		});
		setSearch("");
	};

	return (
		<form {...args} className={cn(className, styles.search)} role="search">
			<Input
				className={styles.input}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Поиск"
				onKeyDown={(e) => {
					if (e.key === "Enter") goToSearch();
				}}
			/>
			<Button
				aria-label="Поиск по сайту"
				onClick={goToSearch}
				className={styles.button}
				variant="fill"
			>
				<SearchIcon />
			</Button>
		</form>
	);
};
