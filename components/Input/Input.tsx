import cn from "classnames";
import React, { ForwardedRef, forwardRef } from "react";
import styles from "./Input.module.css";
import { IInputProps } from "./Input.types";

export const Input = forwardRef(
	(
		{ className, error, ...args }: IInputProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		return (
			<div className={cn(className, styles.wrapper)}>
				<input
					ref={ref}
					{...args}
					className={cn(styles.input, error && styles.errorState)}
				/>
				{error && <span className={styles.error}>{error?.message}</span>}
			</div>
		);
	}
);
