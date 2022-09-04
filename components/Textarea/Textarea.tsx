import cn from "classnames";
import React, { ForwardedRef, forwardRef } from "react";
import styles from "./TextArea.module.css";
import { ITextAreaProps } from "./Textarea.types";

export const Textarea = forwardRef(
	(
		{ className, error, ...args }: ITextAreaProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	) => {
		return (
			<div className={cn(className, styles.wrapper)}>
				<textarea
					rows={3}
					ref={ref}
					{...args}
					className={cn(styles.textarea, error && styles.errorState)}
				/>
				{error && (
					<span role="alert" className={styles.error}>
						{error?.message}
					</span>
				)}
			</div>
		);
	}
);
