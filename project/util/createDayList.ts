// Creates a list of the numbers 1 - 31
export const createDayList = () => {
	let days = [];
	let i = 1;
	while (i <= 31) {
		let listItem = {label: i.toString(), value: i.toString()};
		days.push(listItem);
		i++;
	}
	return days;
};
