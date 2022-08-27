import cn from "classnames";
import React from "react";
import styles from "./TextArea.module.css";
import { ITextAreaProps } from "./Textarea.types";

export const TextArea: React.FC<ITextAreaProps> = ({ className, ...args }) => {
	return <textarea {...args} className={cn(styles.textarea, className)} />;
};
