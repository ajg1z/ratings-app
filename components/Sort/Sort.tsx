import cn from "classnames";
import React, { KeyboardEvent } from "react";
import styles from "./Sort.module.css";
import { ISortProps, SortEnum } from "./Sort.types";
import { Keys } from "../../global-constans";
import { Button } from "../Button/Button";

const { Enter, Space } = Keys;

export const Sort: React.FC<ISortProps> = ({
	setSort,
	sort,
	className,
	...args
}) => {
	const handleKey = (event: KeyboardEvent, sort: SortEnum) => {
		if (event.code === Space || event.code === Enter) {
			setSort(sort);
			event.preventDefault();
		}
	};

	return (
		<div {...args} className={cn(className, styles.container)}>
			<Button
				aria-label="сортировка по рейтингу"
				className={cn(styles.sortItem, {
					[styles.active]: sort === SortEnum.Rating,
				})}
				aria-selected={sort === SortEnum.Rating}
				onKeyDown={(e) => handleKey(e, SortEnum.Rating)}
				onClick={() => setSort(SortEnum.Rating)}
			>
				По рейтингу
			</Button>
			<Button
				aria-label="сортировка по цене"
				className={cn(styles.sortItem, {
					[styles.active]: sort === SortEnum.Price,
				})}
				aria-selected={sort === SortEnum.Price}
				onKeyDown={(e) => handleKey(e, SortEnum.Price)}
				onClick={() => setSort(SortEnum.Price)}
			>
				По цене
			</Button>
		</div>
	);
};
