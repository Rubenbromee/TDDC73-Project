import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {passwordChecker} from '../util/passwordChecker';

// A component that takes in a password string and gives feedback to the user based on the password strength of the string

type Props = {
	password: string;
};

const windowWidth = Dimensions.get('screen').width;

const PasswordFeedback: React.FC<Props> = ({password}: Props) => {
	const [passwordStrengthTerm, setPasswordStrengthTerm] =
		useState<string>('weak');
	const [feedbackMessage, setFeedbackMessage] = useState<string>('');
	const [passwordStrength, setPasswordStrength] = useState<number>(0);

	// Checks the current password string and sets the strenght level and feedback message for display
	useEffect(() => {
		let passwordStrengthObject = passwordChecker(password);
		setFeedbackMessage(passwordStrengthObject.feedbackMessage);
		setPasswordStrength(passwordStrengthObject.strengthLevel);
		if (passwordStrengthObject.strengthLevel == 1) {
			setPasswordStrengthTerm('weak');
		} else if (passwordStrengthObject.strengthLevel == 2) {
			setPasswordStrengthTerm('okay');
		} else if (passwordStrengthObject.strengthLevel == 3) {
			setPasswordStrengthTerm('strong');
		}
	}, [password]);

	return (
		<>
			<Text
				style={
					styles.passwordStrengthTerm
				}>{`Your password is ${passwordStrengthTerm}`}</Text>
			<View style={styles.passwordBarsView}>
				<View style={styles.redBar}></View>
				{passwordStrength >= 2 && (
					<View style={styles.yellowBar}></View>
				)}
				{passwordStrength >= 3 && <View style={styles.greenBar}></View>}
			</View>

			<Text style={styles.passwordStrengthText}>{feedbackMessage}</Text>
		</>
	);
};

const styles = StyleSheet.create({
	passwordBarsView: {
		width: windowWidth,
		maxWidth: windowWidth,
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: 10,
	},
	redBar: {
		width: 80,
		height: 7,
		backgroundColor: 'red',
		borderRadius: 3,
		marginHorizontal: 5,
	},
	yellowBar: {
		width: 80,
		height: 7,
		backgroundColor: 'yellow',
		borderRadius: 3,
		marginHorizontal: 5,
	},
	greenBar: {
		width: 80,
		height: 7,
		backgroundColor: 'green',
		borderRadius: 3,
		marginHorizontal: 5,
	},
	passwordStrengthText: {
		width: windowWidth * 0.8,
		maxWidth: windowWidth * 0.8,
		marginVertical: 10,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
	},
	passwordStrengthTerm: {
		marginVertical: 5,
	},
});

export default PasswordFeedback;
