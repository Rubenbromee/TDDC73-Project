import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CustomDropdown from './components/CustomDropdown';
import CustomTextInput from './components/CustomTextInput';
import {Dimensions} from 'react-native';

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

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const App = () => {
	const months = [
		{label: 'January', value: 'January'},
		{label: 'February', value: 'February'},
		{label: 'March', value: 'March'},
		{label: 'April', value: 'April'},
		{label: 'May', value: 'May'},
		{label: 'June', value: 'June'},
		{label: 'July', value: 'July'},
		{label: 'August', value: 'August'},
		{label: 'September', value: 'September'},
		{label: 'October', value: 'October'},
		{label: 'November', value: 'November'},
		{label: 'December', value: 'December'},
	];

	const days = createDayList();

	const years = createYearList();

	return (
		<SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
			<Text style={styles.passwordText}>Enter password</Text>
			<View style={styles.textInputView}>
				<CustomTextInput type={'fullName'} />
				<CustomTextInput type={'username'} />
				<CustomTextInput type={'email'} />
				<CustomTextInput type={'password'} />
			</View>

			<View style={styles.passwordBarsView}>
				<View style={styles.redBar}></View>
				<View style={styles.yellowBar}></View>
				<View style={styles.greenBar}></View>
			</View>
			<Text style={styles.passwordStrengthText}>
				Your password is: pathetic
			</Text>

			<Text style={styles.dateText}>Enter date of birth</Text>
			<View style={styles.dateView}>
				<View>
					<CustomDropdown data={days} placeHolder={'Day'} />
				</View>
				<View>
					<CustomDropdown data={months} placeHolder={'Month'} />
				</View>
				<View>
					<CustomDropdown data={years} placeHolder={'Year'} />
				</View>
			</View>
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
	},
	passwordText: {
		marginVertical: 10,
	},
	textInputView: {
		width: windowWidth,
		maxWidth: windowWidth,
		justifyContent: 'center',
		alignItems: 'center',
	},
	passwordBarsView: {
		width: windowWidth * 0.7,
		maxWidth: windowWidth,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	redBar: {
		width: 80,
		height: 7,
		backgroundColor: 'red',
		borderRadius: 3,
	},
	yellowBar: {
		width: 80,
		height: 7,
		backgroundColor: 'yellow',
		borderRadius: 3,
	},
	greenBar: {
		width: 80,
		height: 7,
		backgroundColor: 'green',
		borderRadius: 3,
	},
	passwordStrengthText: {
		marginVertical: 15,
	},
});

export default App;
