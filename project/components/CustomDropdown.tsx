import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

type Props = {
	data: {label: string; value: string}[];
	placeHolder: string;
};

const CustomDropdown: React.FC<Props> = ({data, placeHolder}: Props) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [items, setItems] = useState(data);

	return (
		<DropDownPicker
			open={open}
			value={value}
			items={items}
			setOpen={setOpen}
			setValue={setValue}
			setItems={setItems}
			placeholder={placeHolder}
			style={{
				borderRadius: 3,
				borderColor: '#b7dffd',
				width: 100,
			}}
			onChangeValue={val => {
				// console.log(val);
			}}
		/>
	);
};

const styles = {
	select: {
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
