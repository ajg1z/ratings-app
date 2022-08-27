import React from "react";
import { Htag } from "../Htag/Htag";
import styles from "./Benefits.module.css";
import { IBenefitsProps } from "./Benefits.types";
import BenefitIcon from "./benefit.svg";
import { Paragraph } from "../Paragraph/Paragraph";

export const Benefits: React.FC<IBenefitsProps> = ({ advantages }) => {
	return (
		<>
			<Htag className={styles.title} tag="h2">
				Преимущества
			</Htag>
			<div className={styles.body}>
				{advantages.length &&
					advantages.map((benefit) => {
						return (
							<div key={benefit._id} className={styles.benefitItem}>
								<BenefitIcon />
								<Htag className={styles.benefitTitle} tag="h2">
									{benefit.title}
								</Htag>
								<div className={styles.line}></div>
								<Paragraph className={styles.description}>
									{benefit.description}
								</Paragraph>
							</div>
						);
					})}
			</div>
		</>
	);
};
