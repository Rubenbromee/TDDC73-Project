import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import DropDownPicker, {
	DropDownPickerProps,
	ItemType,
	ValueType,
} from 'react-native-dropdown-picker';

type Props = {
	type?: string;
};

const createYearList = () => {
	let years = [];
	let i = 0;
	let year = 1923;
	while (i <= 100) {
		let listItem = {label: year.toString(), value: year.toString()};
		years.push(listItem);
		year++;
		i++;
	}
	return years;
};

const createDayList = () => {
	let days = [];
	let i = 1;
	while (i < 31) {
		let listItem = {label: i.toString(), value: i.toString()};
		days.push(listItem);
		i++;
	}
	return days;
};

const CustomDropdown: React.FC<Props> = ({type}: Props) => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const days = createDayList();

	const years = createYearList();

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [items, setItems] = useState(days);

	console.log(days);
	console.log(years);

	return (
		<DropDownPicker
			open={open}
			value={value}
			items={items}
			setOpen={setOpen}
			setValue={setValue}
			setItems={setItems}
			placeholder={'Jeg'}
			style={{
				borderRadius: 3,
				borderColor: '#b7dffd',
				width: 100,
				marginTop: 10,
				marginBottom: 10,
				marginHorizontal: 0,
				padding: 0,
			}}
			onChangeValue={val => {
				console.log(val);
			}}
		/>
	);
};

const styles = {
	select: {
		flex: 0.3,
		borderRadius: 5,
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: 'lightgrey',
	},
	text: {
		fontSize: 12,
	},
};

export default CustomDropdown;
