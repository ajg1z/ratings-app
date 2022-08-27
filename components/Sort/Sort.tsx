import cn from "classnames";
import React from "react";
import styles from "./Sort.module.css";
import { ISortProps, SortEnum } from "./Sort.types";
import SortIcon from "./Sort.svg";

export const Sort: React.FC<ISortProps> = ({
	setSort,
	sort,
	className,
	...args
}) => {
	return (
		<div {...args} className={cn(className, styles.container)}>
			<span
				className={cn(styles.sortItem, {
					[styles.active]: sort === SortEnum.Rating,
				})}
				onClick={(e) => setSort(SortEnum.Rating)}
			>
				<SortIcon className={styles.sortIcon} />
				По рейтингу
			</span>
			<span
				className={cn(styles.sortItem, {
					[styles.active]: sort === SortEnum.Price,
				})}
				onClick={(e) => setSort(SortEnum.Price)}
			>
				<SortIcon className={styles.sortIcon} />
				По цене
			</span>
		</div>
	);
};
