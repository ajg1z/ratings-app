import React from "react";

export function useThrottle(callback: (...args: any) => void, delay: number) {
	let isThrottled = React.useRef<boolean | null>(null);
	const throttledCallback = React.useCallback(() => {
		if (isThrottled.current) return;
		callback();
		isThrottled.current = true;
		setTimeout(() => (isThrottled.current = false), delay);
	}, [delay, callback]);

	return throttledCallback;
}
