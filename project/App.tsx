import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CustomDropdown from './components/CustomDropdown';
import CustomTextInput from './components/CustomTextInput';
import {Dimensions} from 'react-native';
import {passwordChecker} from './util/passwordChecker';
import {createYearList} from './util/createYearList';
import {createDayList} from './util/createDayList';
import {months} from './util/months';

const windowWidth = Dimensions.get('screen').width;

const App = () => {
	const days = createDayList();
	const years = createYearList();
	const [fullName, setFullName] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [feedbackMessage, setFeedbackMessage] = useState<string>('');
	const [passwordStrength, setPasswordStrength] = useState<number>(0);
	const [passwordStrengthTerm, setPasswordStrengthTerm] =
		useState<string>('weak');
	const [day, setDay] = useState<string | null>(null);
	const [month, setMonth] = useState<string | null>(null);
	const [year, setYear] = useState<string | null>(null);
	const [registrationMessage, setRegistrationMessage] = useState<string>('');
	const [successfulRegistration, setSuccessfullRegistration] =
		useState<boolean>(false);
	const [registrationInProgress, setRegistrationInProgress] =
		useState<boolean>(true);

	// When the password is changed, run it through the password checker and update the feedback message to the user,
	// the strenght level and the strength term shown to the user that is based on the strength level
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

	useEffect(() => {
		setRegistrationInProgress(true);
	}, [fullName, username, email, password, day, month, year]);

	// Check that all data is given by the user, check that password is not too weak
	const onRegister = () => {
		let _registrationMessage = '';
		let passwordStrengthObject = passwordChecker(password);

		if (fullName == '') {
			_registrationMessage += 'Full name not set. ';
		}

		if (username == '') {
			_registrationMessage += 'Username not set. ';
		}
		if (email == '') {
			_registrationMessage += 'Email not set. ';
		}
		if (password == '') {
			_registrationMessage += 'Password not set. ';
		}
		if (year == null) {
			_registrationMessage += 'Year not set. ';
		}
		if (month == null) {
			_registrationMessage += 'Month not set. ';
		}
		if (day == null) {
			_registrationMessage += 'Day not set. ';
		}
		if (passwordStrengthObject.strengthLevel == 1 && password != '') {
			_registrationMessage += 'Password too weak. ';
		}

		setSuccessfullRegistration(false);

		if (_registrationMessage == '') {
			_registrationMessage = 'Registration successful!';
			setSuccessfullRegistration(true);
		}

		setRegistrationMessage(_registrationMessage);
		setRegistrationInProgress(false);
	};

	return (
		<SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
			<Text style={styles.title}>Register User</Text>
			<View style={styles.textInputView}>
				<CustomTextInput type={'fullName'} setValue={setFullName} />
				<CustomTextInput type={'username'} setValue={setUsername} />
				<CustomTextInput type={'email'} setValue={setEmail} />
				<CustomTextInput type={'password'} setValue={setPassword} />
			</View>
			{password != '' && (
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
						{passwordStrength >= 3 && (
							<View style={styles.greenBar}></View>
						)}
					</View>

					<Text style={styles.passwordStrengthText}>
						{feedbackMessage}
					</Text>
				</>
			)}
			<Text style={styles.dateText}>Enter date of birth</Text>
			<View style={styles.dateView}>
				<View>
					<CustomDropdown
						data={days}
						placeHolder={'Day'}
						setDropdownValue={setDay}
					/>
				</View>
				<View>
					<CustomDropdown
						data={months}
						placeHolder={'Month'}
						setDropdownValue={setMonth}
					/>
				</View>
				<View>
					<CustomDropdown
						data={years}
						placeHolder={'Year'}
						setDropdownValue={setYear}
					/>
				</View>
			</View>
			<View
				style={{
					width: 250,
					position: 'absolute',
					bottom: registrationInProgress ? -30 : 0,
				}}>
				<Button title="Register" onPress={() => onRegister()}></Button>
			</View>

			{!registrationInProgress && (
				<Text
					style={{
						color: successfulRegistration ? 'green' : 'red',
						textAlign: 'center',
						marginHorizontal: 5,
						marginBottom: 50,
					}}>
					{registrationMessage}
				</Text>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	dateView: {
		width: windowWidth,
		maxWidth: windowWidth,
		height: 50,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginVertical: 25,
	},
	dateText: {
		marginVertical: 10,
		fontSize: 15,
	},
	title: {
		marginVertical: 10,
		fontSize: 30,
	},
	textInputView: {
		width: windowWidth,
		maxWidth: windowWidth,
		justifyContent: 'center',
		alignItems: 'center',
	},
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

export default App;
