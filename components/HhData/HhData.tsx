import React from "react";
import styles from "./HhData.module.css";
import { IHhDataProps } from "./HtData.types";
import { Card } from "../Card/Card";
import RateIcon from "./star-rate.svg";
import { priceSpace } from "../../helpers/functions";

export const HhData: React.FC<IHhDataProps> = ({
	count,
	juniorSalary,
	middleSalary,
	seniorSalary,
}) => {
	return (
		<div className={styles.container}>
			<Card className={styles.count}>
				<p className={styles.title}>Всего вакансий</p>
				<p className={styles.countValue}>{count}</p>
			</Card>
			<Card className={styles.salary}>
				<div className={styles.salaryBlock}>
					<p className={styles.level}>Начальный</p>
					<p className={styles.salaryValue}>{priceSpace(juniorSalary)} </p>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon />
						<RateIcon />
					</div>
				</div>
				<div className={styles.salaryBlock}>
					<p className={styles.level}>Средний</p>
					<p className={styles.salaryValue}>{priceSpace(middleSalary)} </p>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon />
					</div>
				</div>
				<div className={styles.salaryBlock}>
					<p className={styles.level}>Профессионал</p>
					<p className={styles.salaryValue}>{priceSpace(seniorSalary)} </p>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
					</div>
				</div>
			</Card>
		</div>
	);
};
