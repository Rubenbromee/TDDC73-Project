import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import CustomDropdown from './components/CustomDropdown';

const App = () => {
	return (
		<SafeAreaView>
			<Text>Enter password</Text>
			<CustomDropdown />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default App;
