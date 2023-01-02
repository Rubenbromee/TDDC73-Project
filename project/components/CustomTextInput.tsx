// Custom text input component
import React from 'react';
import {TextInput} from 'react-native';
type Props = {
	type: 'fullName' | 'username' | 'email' | 'password';
};

const CustomTextInput: React.FC<Props> = ({type}: Props) => {
	const renderTextInput = (inputType: string) => {
		if (inputType == 'fullName') {
			return <TextInput style={styles.input} placeholder="Full Name" />;
		} else if (inputType == 'username') {
			return <TextInput style={styles.input} placeholder="Username" />;
		} else if (inputType == 'email') {
			return (
				<TextInput
					style={styles.input}
					placeholder="Email"
					keyboardType="email-address"
				/>
			);
		} else if (inputType == 'password') {
			return <TextInput style={styles.input} placeholder="Password" />;
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
