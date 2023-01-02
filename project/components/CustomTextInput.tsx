// Custom text input component
import React from 'react';
import {TextInput} from 'react-native';
type Props = {
	type: string;
};

const CustomTextInput: React.FC<Props> = ({type}: Props) => {
	const renderTextInput = (inputType: string) => {
		if (inputType == 'fullName') {
			return <TextInput placeholder="Full Name" />;
		} else if (inputType == 'username') {
			return <TextInput placeholder="Username" />;
		} else if (inputType == 'email') {
			return (
				<TextInput placeholder="email" keyboardType="email-address" />
			);
		} else if (inputType == 'username') {
			return <TextInput placeholder="Username" />;
		}
	};
	return <></>;
};

export default CustomTextInput;
