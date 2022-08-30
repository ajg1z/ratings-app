import React from "react";
import { Rating } from "../Rating/Rating";
import styles from "./Review.module.css";
import { IReviewProps } from "./Review.types";
import UserIcon from "./user.svg";
import { ru } from "date-fns/locale";
import { format } from "date-fns";
import { Paragraph } from "../Paragraph/Paragraph";
import cn from "classnames";

export const Review: React.FC<IReviewProps> = ({
	review,
	className,
	...args
}) => {
	return (
		<div {...args} className={cn(className, styles.review)}>
			<UserIcon className={styles.userIcon} />
			<div className={styles.titleBlock}>
				<span className={styles.name}>{review.name}: </span>
				<span className={styles.title}>{review.title}</span>
			</div>
			<div className={styles.date}>
				{format(new Date(review.createdAt), "dd MMMM yyyy", { locale: ru })}
			</div>
			<div className={styles.rating}>
				<Rating rating={review.rating} />
			</div>
			<Paragraph className={styles.description}>{review.description}</Paragraph>
		</div>
	);
};
