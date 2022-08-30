const uri = process.env.NEXT_PUBLIC_DOMAIN;

export const API = {
	topPage: {
		find: uri + "/api/top-page/find",
		byAlias: uri + "/api/top-page/byAlias/",
	},
	product: {
		find: uri + "/api/product/find/",
	},
	review: {
		createDemo: uri + "/api/review/create-demo",
	},
};
