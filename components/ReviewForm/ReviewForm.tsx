import React, { useState } from "react";
import {
	ICreateDemoResponse,
	IReviewForm,
	IReviewFormProps,
} from "./ReviewForm.types";
import styles from "./ReviewForm.module.css";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import { Paragraph } from "../Paragraph/Paragraph";
import CloseIcon from "./close.svg";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { API } from "../../helpers/api";
import { ERROR_MESSAGES } from "../../helpers/error-messages";
import cn from "classnames";

export const ReviewForm: React.FC<IReviewFormProps> = ({
	productId,
	...args
}) => {
	const {
		formState: { errors },
		handleSubmit,
		register,
		reset,
		control,
	} = useForm<IReviewForm>();
	const [error, setError] = useState<string>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	const onSubmit = async (payload: IReviewForm) => {
		setIsSuccess(false);
		setError(undefined);
		try {
			const { data } = await axios.post<ICreateDemoResponse>(
				API.review.createDemo,
				{
					...payload,
					productId,
				}
			);
			if (data.message) {
				reset();
				setIsSuccess(true);
			} else setError(ERROR_MESSAGES.DEFAULT_MESSAGE);
		} catch (e: any) {
			setError(ERROR_MESSAGES.DEFAULT_MESSAGE);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div {...args} className={styles.form}>
				<Input
					{...register("name", {
						required: { value: true, message: "Имя обязательно" },
					})}
					error={errors.name}
					className={styles.input}
					placeholder="Имя"
				/>
				<Input
					{...register("title", {
						required: { value: true, message: "Загаловок обязателен" },
					})}
					error={errors.title}
					className={styles.input}
					placeholder="Загаловок отзыва"
				/>
				<div className={styles.rate}>
					<span className={styles.label}>Оценка</span>
					<Controller
						name="rating"
						rules={{ required: { message: "рейтинг обязателен", value: true } }}
						control={control}
						render={({ field }) => (
							<Rating
								rating={field.value}
								isEditable
								error={errors.rating}
								ref={field.ref}
								setRating={field.onChange}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register("description", {
						required: { value: true, message: "Описание обязательно" },
					})}
					error={errors.description}
					className={styles.textarea}
					placeholder="Текст отзыва"
				/>
				<div className={styles.actions}>
					<Button variant="fill" className={styles.send}>
						Отправить
					</Button>
					<Paragraph className={styles.note}>
						* Перед публикацией отзыв пройдет предварительную модерацию и
						проверку
					</Paragraph>
				</div>
			</div>
			{error && (
				<div className={cn(styles.error, styles.panel)}>
					<div className={styles.description}>{error}</div>
					<CloseIcon onClick={() => setError("")} className={styles.close} />
				</div>
			)}
			{isSuccess && (
				<div className={cn(styles.success, styles.panel)}>
					<div className={styles.title}>Отзыв успешно сохранен.</div>
					<div className={styles.description}>
						Спасибо, отзыв скоро будет рассмотрен.
					</div>
					<CloseIcon
						onClick={() => setIsSuccess(false)}
						className={styles.close}
					/>
				</div>
			)}
		</form>
	);
};
