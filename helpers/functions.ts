export const PricSpaceReqex = /\B(?=(\d{3})+(?!\d))/g;

export function priceSpace(price: number) {
	return price.toString().replace(PricSpaceReqex, " ").concat(" ₽");
}

export function convertEndingWords(
	number: number,
	titles: [string, string, string]
): string {
	const cases = [2, 0, 1, 1, 1, 2];
	return titles[
		number % 100 > 4 && number % 100 < 20
			? 2
			: cases[number % 10 < 5 ? number % 10 : 5]
	];
}
