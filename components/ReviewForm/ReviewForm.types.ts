import { DetailedHTMLProps, FormHTMLAttributes, HTMLAttributes } from "react";

export interface IReviewFormProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	productId: string;
}

export interface IReviewForm {
	name: string;
	title: string;
	description: string;
	rating: number;
}

export interface ICreateDemoResponse {
	message: string;
}
