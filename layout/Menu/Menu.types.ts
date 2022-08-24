import { TopLevelCategory } from "../../interfaces/top-page.interface";

export interface IFirstLevelMenuItem {
	name: string;
	route: string;
	icon: JSX.Element;
	id: TopLevelCategory;
}
