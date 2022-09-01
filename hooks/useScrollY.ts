import React from "react";

export default function useScrollY() {
	const isClient = typeof window !== "undefined";
	const [scrollY, setScrollY] = React.useState<number>(0);
	const handleScrollY = () => {
		const currentScrollY = isClient ? window.scrollY : 0;
		setScrollY(currentScrollY);
	};

	React.useEffect(() => {
		window.addEventListener("scroll", handleScrollY, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScrollY);
		};
	}, []);

	return scrollY;
}
