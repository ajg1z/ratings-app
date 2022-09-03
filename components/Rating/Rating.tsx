import React, {
	ForwardedRef,
	forwardRef,
	KeyboardEvent,
	useEffect,
	useState,
} from "react";
import styles from "./Rating.module.css";
import { IRatingProps } from "./Rating.types";
import StarIcon from "./star.svg";
import cn from "classnames";
import { Keys } from "../../global-constans";

const { ArrowLeft, ArrowRight, ArrowDown, ArrowUp } = Keys;

export const Rating = forwardRef(
	(
		{ rating, setRating, isEditable, error, tabIndex, ...args }: IRatingProps,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
			new Array(5).fill(<></>)
		);
		const ratingArrayRef = React.useRef<(HTMLSpanElement | null)[]>([]);

		const setTabIndex = (rating: number, index: number) => {
			if (!isEditable) return -1;
			if (!rating && index == 0) return tabIndex ?? 0;
			if (rating === index + 1) return 0;
			return tabIndex;
		};

		useEffect(() => {
			constructRating(rating);
		}, [rating, tabIndex]);

		const handleKey = (event: KeyboardEvent) => {
			if (!isEditable || !setRating) return;
			if (event.code === ArrowRight || event.code === ArrowUp) {
				event.preventDefault();
				if (!rating) {
					setRating(1);
				} else {
					setRating(rating < 5 ? rating + 1 : 5);
				}
				ratingArrayRef.current![rating]?.focus();
			}

			if (event.code === ArrowLeft || event.code === ArrowDown) {
				event.preventDefault();
				setRating(rating > 1 ? rating - 1 : 1);
				ratingArrayRef.current![rating - 2]?.focus();
			}
		};

		const constructRating = (currentRating: number) => {
			const updatedRating = ratingArray.map((_, index) => {
				return (
					<span
						key={index}
						onMouseEnter={() => changeDisplay(index + 1)}
						onMouseLeave={() => changeDisplay(rating)}
						onClick={() => onClick(index + 1)}
						tabIndex={setTabIndex(rating, index)}
						ref={(ref) => ratingArrayRef.current?.push(ref)}
						onKeyDown={(e) => handleKey(e)}
					>
						<StarIcon
							className={cn(styles.star, {
								[styles.filled]: index < currentRating,
								[styles.editable]: isEditable,
							})}
						/>
					</span>
				);
			});
			setRatingArray(updatedRating);
		};

		const changeDisplay = (index: number) => {
			if (isEditable) constructRating(index);
		};

		const onClick = (index: number) => {
			if (isEditable && setRating) setRating(index);
		};

		return (
			<div
				ref={ref}
				className={cn(styles.container, error && styles.error)}
				{...args}
			>
				{ratingArray}
				{error && <span className={styles.errorMessage}>{error.message}</span>}
			</div>
		);
	}
);
