import { withLayout } from "../layout/layout";

const Search = () => {
	return (
		<>
			<h1>Search</h1>
		</>
	);
};

export default withLayout(Search);

interface ISearchProps extends Record<string, unknown> {}
