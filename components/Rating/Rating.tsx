import React, { useEffect, useState } from "react";
import styles from "./Rating.module.css";
import { IRatingProps } from "./Rating.types";
import StarIcon from "./star.svg";
import cn from "classnames";
import { useHover } from "../../hooks/useHover";
export const Rating: React.FC<IRatingProps> = ({
	rating,
	setRating,
	isEditable,
	...args
}) => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
		new Array(5).fill(<></>)
	);

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedRating = ratingArray.map((r, i) => {
			return (
				<StarIcon
					key={i}
					className={cn(styles.star, {
						[styles.filled]: i < currentRating,
						[styles.editable]: isEditable,
					})}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(i + 1)}
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e) => {
						if (e.code === "Space") onClick(i + 1);
					}}
				/>
			);
		});
		setRatingArray(updatedRating);
	};

	const changeDisplay = (i: number) => {
		if (isEditable) constructRating(i);
	};

	const onClick = (i: number) => {
		if (isEditable && setRating) setRating(i);
	};

	return (
		<div className={styles.container} {...args}>
			{ratingArray}
		</div>
	);
};
