import React, { RefObject, useEffect } from "react";

export function useHover<T extends HTMLElement>(ref: RefObject<T>) {
	const [isHovering, setHovering] = React.useState(false);
	const on = () => setHovering(true);
	const off = () => setHovering(false);

	useEffect(() => {
		if (!ref.current) return;
		const node = ref.current;
		node.addEventListener("mouseenter", on);
		node.addEventListener("mousemove", on);
		node.addEventListener("mouseleave", off);

		return () => {
			node.removeEventListener("mouseenter", on);
			node.removeEventListener("mousemove", on);
			node.removeEventListener("mouseleave", off);
		};
	}, []);

	return isHovering;
}
