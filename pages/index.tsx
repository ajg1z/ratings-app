import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Htag, Button, Paragraph, Tag, Rating } from "../components";
import { withLayout } from "../layout/layout";
// import {} from "../layout";

const Home: NextPage = () => {
	const [rating, setRating] = useState(5);
	return (
		<>
			<Htag title="HTag" tag="h1">
				Rating
			</Htag>
			<Rating isEditable rating={rating} setRating={setRating} />
		</>
	);
};

export default withLayout(Home);
