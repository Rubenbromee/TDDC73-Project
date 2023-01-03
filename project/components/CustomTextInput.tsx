// Custom text input component
import React, {useState} from 'react';
import {TextInput} from 'react-native';
type Props = {
	type: 'fullName' | 'username' | 'email' | 'password';
	setValue: React.Dispatch<React.SetStateAction<string>>;
};

const CustomTextInput: React.FC<Props> = ({type, setValue}: Props) => {
	const [fullName, setFullName] = useState<string>('');

	// Sanitization of the full name text entry to only contain  letters, spaces and hyphens (-)
	const changeFullName = (name: string) => {
		name = name.replace(/[^ a-zA-ZåäöüßÄÅÖÜ-]/, '');
		setFullName(name);
	};

	const renderTextInput = (inputType: string) => {
		if (inputType == 'fullName') {
			return (
				<TextInput
					style={styles.input}
					placeholder="Full Name"
					onChangeText={text => {
						changeFullName(text);
						setValue(text);
					}}
					value={fullName}
				/>
			);
		} else if (inputType == 'username') {
			return (
				<TextInput
					style={styles.input}
					placeholder="Username"
					onChangeText={text => {
						setValue(text);
					}}
				/>
			);
		} else if (inputType == 'email') {
			return (
				<TextInput
					style={styles.input}
					placeholder="Email"
					keyboardType="email-address"
					onChangeText={text => {
						setValue(text);
					}}
				/>
			);
		} else if (inputType == 'password' && setValue) {
			return (
				<TextInput
					style={styles.input}
					placeholder="Password"
					onChangeText={text => {
						setValue(text);
					}}
					secureTextEntry={true}
				/>
			);
		}
	};
	return <>{renderTextInput(type)}</>;
};

const styles = {
	input: {
		borderColor: 'gray',
		borderWidth: 1,
		width: '80%',
		borderRadius: 5,
		marginVertical: 15,
		paddingLeft: 15,
	},
};
export default CustomTextInput;
