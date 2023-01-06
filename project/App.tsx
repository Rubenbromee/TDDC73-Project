import React from 'react';
import {SafeAreaView} from 'react-native';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
	return (
		<SafeAreaView>
			<RegistrationForm title={'Register User'} />
		</SafeAreaView>
	);
};

export default App;
