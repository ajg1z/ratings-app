import { IProductModel } from "../../interfaces/product.interface";
import {
	ITopPageModel,
	TopLevelCategory,
} from "../../interfaces/top-page.interface";

export interface ITopPageComponentProps {
	firstCategory: TopLevelCategory;
	page: ITopPageModel;
	products: IProductModel[];
}
