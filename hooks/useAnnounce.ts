import React from "react";

interface IUseAnnounceProps {
	close: string;
	open: string;
}

export default function useAnnounce(
	messageObj: IUseAnnounceProps
): [
	React.Dispatch<React.SetStateAction<"opened" | "closed" | undefined>>,
	string
] {
	const [announce, setAnnounce] = React.useState<
		"opened" | "closed" | undefined
	>(undefined);
	const [log, setLog] = React.useState(
		announce === "closed" ? messageObj.close : messageObj.open
	);
	React.useEffect(() => {
		setLog(announce === "closed" ? messageObj.close : messageObj.open);
	}, [announce]);

	return [setAnnounce, log];
}
