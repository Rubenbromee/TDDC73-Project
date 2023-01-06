import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';
import {createDayList} from '../util/createDayList';
import {createYearList} from '../util/createYearList';
import React, {useEffect, useState} from 'react';
import {passwordChecker} from '../util/passwordChecker';
import CustomDropdown from './CustomDropdown';
import CustomTextInput from './CustomTextInput';
import {months} from '../util/months';
import PasswordFeedback from './PasswordFeedback';

// A registration form with a dynamic title and a built in password strength feedback component
// Gives a warning if registration is attempted with missing data

type Props = {
	title: string;
};

const windowWidth = Dimensions.get('screen').width;

const RegistrationForm: React.FC<Props> = ({title}: Props) => {
	const days = createDayList();
	const years = createYearList();
	const [fullName, setFullName] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [day, setDay] = useState<string | null>(null);
	const [month, setMonth] = useState<string | null>(null);
	const [year, setYear] = useState<string | null>(null);
	const [registrationMessage, setRegistrationMessage] = useState<string>('');
	const [successfulRegistration, setSuccessfullRegistration] =
		useState<boolean>(false);
	const [registrationInProgress, setRegistrationInProgress] =
		useState<boolean>(true);

	// Checks if registration is in progress to remove the previous registration message
	useEffect(() => {
		setRegistrationInProgress(true);
	}, [fullName, username, email, password, day, month, year]);

	// Check that all data is given by the user, check that password is not too weak
	const onRegister = () => {
		let _registrationMessage = '';
		let passwordStrengthObject = passwordChecker(password);

		if (fullName === '') {
			_registrationMessage += 'Full name not set. ';
		}

		if (username === '') {
			_registrationMessage += 'Username not set. ';
		}
		if (email === '') {
			_registrationMessage += 'Email not set. ';
		}
		if (password === '') {
			_registrationMessage += 'Password not set. ';
		}
		if (year === null) {
			_registrationMessage += 'Year not set. ';
		}
		if (month === null) {
			_registrationMessage += 'Month not set. ';
		}
		if (day === null) {
			_registrationMessage += 'Day not set. ';
		}
		if (passwordStrengthObject.strengthLevel === 1 && password !== '') {
			_registrationMessage += 'Password too weak. ';
		}

		setSuccessfullRegistration(false);

		if (_registrationMessage === '') {
			_registrationMessage = 'Registration successful!';
			setSuccessfullRegistration(true);
		}

		setRegistrationMessage(_registrationMessage);
		setRegistrationInProgress(false);
	};

	return (
		<View style={styles.wrappingView}>
			<Text style={styles.title}>{title}</Text>
			<View style={styles.textInputView}>
				<CustomTextInput type={'fullName'} setValue={setFullName} />
				<CustomTextInput type={'username'} setValue={setUsername} />
				<CustomTextInput type={'email'} setValue={setEmail} />
				<CustomTextInput type={'password'} setValue={setPassword} />
			</View>
			{password != '' && <PasswordFeedback password={password} />}
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
		</View>
	);
};

const styles = StyleSheet.create({
	wrappingView: {
		alignItems: 'center',
		justifyContent: 'center',
	},
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
});

export default RegistrationForm;
