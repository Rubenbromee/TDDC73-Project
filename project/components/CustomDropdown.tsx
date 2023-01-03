import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

type Props = {
	data: {label: string; value: string}[];
	placeHolder: string;
	setDropdownValue: React.Dispatch<React.SetStateAction<string | null>>;
};

const CustomDropdown: React.FC<Props> = ({
	data,
	placeHolder,
	setDropdownValue,
}: Props) => {
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
			dropDownContainerStyle={{height: 130}}
			onChangeValue={val => {
				setDropdownValue(val);
			}}
			dropDownDirection={'TOP'}
		/>
	);
};

export default CustomDropdown;
