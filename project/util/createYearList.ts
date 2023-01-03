// Creates a list of the numbers 2023 - 1923 in descending order
export const createYearList = () => {
	let years = [];
	let i = 100;
	let year = 2023;
	while (i >= 0) {
		let listItem = {label: year.toString(), value: year.toString()};
		years.push(listItem);
		year--;
		i--;
	}
	return years;
};
