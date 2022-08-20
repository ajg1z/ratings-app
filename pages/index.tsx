import type { NextPage } from "next";
import { Htag, Button, Paragraph, Tag } from "../components";

const Home: NextPage = () => {
	return (
		<div>
			<Htag title="HTag" tag="h1">
				first tag{" "}
			</Htag>
			<Button arrow="down" variant="fill">
				Купить курс
			</Button>
			<Button arrow="right" variant="outlined">
				Купить курс
			</Button>
			<Paragraph>Text</Paragraph>
			<Tag color="red">Text 2</Tag>
		</div>
	);
};

export default Home;
