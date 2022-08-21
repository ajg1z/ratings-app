import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IRatingProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	rating: number;
	isEditable?: boolean;
	setRating?: (rate: number) => void;
}
