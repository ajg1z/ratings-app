import React, { createContext, PropsWithChildren, ReactNode } from "react";
import { IMenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/top-page.interface";

export interface IAppContext {
	menu: IMenuItem[];
	firstCategory: TopLevelCategory;
	setMenu?: (menu: IMenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
	menu: [],
	firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({
	menu,
	firstCategory,
	children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
	const [menuState, setMenuState] = React.useState<IMenuItem[]>(menu);
	return (
		<AppContext.Provider
			value={{ menu: menuState, setMenu: setMenuState, firstCategory }}
		>
			{children}
		</AppContext.Provider>
	);
};
