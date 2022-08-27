import React from "react";
import { convertEndingWords, priceSpace } from "../../helpers/functions";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Divider } from "../Divider/Divider";
import { Paragraph } from "../Paragraph/Paragraph";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import styles from "./Product.module.css";
import { IProductProps } from "./Product.types";
import Image from "next/image";
import cn from "classnames";

export const Product: React.FC<IProductProps> = ({
	className,
	product,
	...args
}) => {
	return (
		<Card className={styles.product}>
			<div className={styles.logo}>
				<Image
					objectFit="cover"
					width={70}
					height={70}
					className={styles.logoImage}
					alt={product.title}
					src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
				/>
			</div>
			<div className={styles.title}>{product.title}</div>
			<div className={styles.price}>
				{priceSpace(product.price)}
				{product.oldPrice && (
					<Tag className={styles.oldPrice} color="green">
						{priceSpace(product.price - product.oldPrice)}
					</Tag>
				)}
			</div>
			<div className={styles.credit}>
				{priceSpace(product.credit)}
				<span className={styles.month}> /мес</span>
			</div>
			<div className={styles.rating}>
				<Rating rating={product.reviewAvr ?? product.initialRating} />
			</div>
			<div className={styles.tags}>
				{product.categories.map((category) => {
					return (
						<Tag
							className={styles.tag}
							size="small"
							key={category}
							color="ghost"
						>
							{category}
						</Tag>
					);
				})}
			</div>
			<div className={styles.priceTitle}>цена</div>
			<div className={styles.creditTitle}>кредит</div>
			<div className={styles.rateTitle}>
				{product.reviewCount + " "}
				{convertEndingWords(product.reviewCount, [
					"отзыв",
					"отзыва",
					"отзывов",
				])}
			</div>
			<Divider className={cn(styles.divider, styles.dividerSecond)} />
			<Paragraph className={styles.description}>
				{product.description}
			</Paragraph>
			<div className={styles.feature}>
				{product.characteristics.map((c) => {
					return (
						<div key={c.name} className={styles.characteristic}>
							<span className={styles.characteristicName}>{c.name}</span>
							<span className={styles.ellipsis}></span>
							<span className={styles.characteristicValue}>{c.value}</span>
						</div>
					);
				})}
			</div>
			{(product.advantages || product.disadvantages) && (
				<div className={styles.advBlock}>
					{product.advantages && (
						<div className={styles.advantages}>
							<p>Преимущества</p>
							<div>{product.advantages}</div>
						</div>
					)}
					{product.disadvantages && (
						<div className={styles.disadvantages}>
							<p>Недостатки</p>
							<div>{product.disadvantages}</div>
						</div>
					)}
				</div>
			)}

			<Divider className={styles.divider} />
			<div className={styles.actions}>
				<Button>Узнать подробнее</Button>
				<Button className={styles.reviewBtn} variant="outlined" arrow="right">
					Читать отзывы
				</Button>
			</div>
		</Card>
	);
};