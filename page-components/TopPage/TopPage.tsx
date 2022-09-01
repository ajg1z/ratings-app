import React, { useCallback, useEffect, useReducer } from "react";
import { HhData, Htag, Tag, Benefits, Sort, Product } from "../../components";
import { SortEnum } from "../../components/Sort/Sort.types";
import { TopLevelCategory } from "../../interfaces/top-page.interface";
import { ISortReduserState, sortReducer } from "./sort.reducer";
import styles from "./TopPage.module.css";
import { ITopPageComponentProps } from "./TopPage.types";

export const TopPageComponent: React.FC<ITopPageComponentProps> = ({
	firstCategory,
	page,
	products,
}): JSX.Element => {
	const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
		sortReducer,
		{
			products,
			sort: SortEnum.Rating,
		}
	);

	useEffect(() => {
		dispatchSort({
			type: "reset",
			payload: products,
		});
	}, [products]);

	const setSort = useCallback((sort: SortEnum) => {
		dispatchSort({ type: sort });
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Htag className={styles.title} tag="h1">
					{page.title}
					{sortedProducts && (
						<Tag className={styles.tagTitle} color="grey" size="medium">
							{sortedProducts.length}
						</Tag>
					)}
				</Htag>

				<Sort className={styles.sort} sort={sort} setSort={setSort} />
			</div>

			<div className={styles.products}>
				{sortedProducts &&
					sortedProducts.map((product) => {
						return <Product layout key={product._id} product={product} />;
					})}
			</div>

			<div className={styles.vacanciesTitle}>
				<Htag tag="h2">
					Вакансии - <span>{page.category}</span>
				</Htag>
				<Tag size="medium" color="red">
					hh.ru
				</Tag>
			</div>

			{firstCategory === TopLevelCategory.Courses && page.hh && (
				<HhData {...page.hh} />
			)}

			{page.advantages ? (
				page.advantages.length ? (
					<Benefits advantages={page.advantages} />
				) : null
			) : null}

			{page.seoText && (
				<div
					dangerouslySetInnerHTML={{ __html: page.seoText }}
					className={styles.seoText}
				/>
			)}

			<Htag className={styles.tagsTitle} tag="h2">
				{page.tagsTitle}
			</Htag>

			{page.tags && page.tags.length && (
				<div className={styles.tags}>
					{page.tags.map((tag) => {
						return (
							<Tag key={tag} className={styles.tag} color="primary">
								{tag}
							</Tag>
						);
					})}
				</div>
			)}
		</div>
	);
};
