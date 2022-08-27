import { SortEnum } from "../../components/Sort/Sort.types";
import { IProductModel } from "../../interfaces/product.interface";

export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Rating };

export interface ISortReduserState {
	sort: SortEnum;
	products: IProductModel[];
}

export function sortReducer(
	state: ISortReduserState,
	action: SortActions
): ISortReduserState {
	switch (action.type) {
		case SortEnum.Price:
			return {
				sort: SortEnum.Price,
				products: state.products.sort((a, b) => b.price - a.price),
			};
		case SortEnum.Rating:
			return {
				sort: SortEnum.Rating,
				products: state.products.sort(
					(a, b) => b.initialRating - a.initialRating
				),
			};
		default:
			throw new Error("Неверный тип");
	}
}
