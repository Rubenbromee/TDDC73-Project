type ReturnObject = {
	strengthLevel: 1 | 2 | 3;
	feedbackMessage: string;
};

/* Checks the password and returns an object that contains a strength level of the password and a
feedback message to the user communicating the specific weaknesses of the password */
export const passwordChecker = (password: string) => {
	let returnObject: ReturnObject = {
		strengthLevel: 1,
		feedbackMessage: '',
	};
	let fulfilledReq = 0;
	let specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

	// Check minimum length 8
	if (password.length >= 8) {
		fulfilledReq++;
	} else {
		returnObject.feedbackMessage += 'Less than 8 characters. ';
	}

	// Check that password contains special characters
	if (specialCharacters.test(password)) {
		fulfilledReq++;
	} else {
		returnObject.feedbackMessage += 'No special characters. ';
	}

	// Check that password contains numbers
	if (/\d/.test(password)) {
		fulfilledReq++;
	} else {
		returnObject.feedbackMessage += 'No numbers. ';
	}

	// Check that password contains uppercase letters
	if (/[A-Z]/.test(password)) {
		fulfilledReq++;
	} else {
		returnObject.feedbackMessage += 'No upercase characters. ';
	}

	// Give a strength score depending on nr of fulifilled requirements
	if (fulfilledReq < 2) {
		returnObject.strengthLevel = 1;
	} else if (fulfilledReq < 4) {
		returnObject.strengthLevel = 2;
	} else if (fulfilledReq >= 4) {
		returnObject.strengthLevel = 3;
		returnObject.feedbackMessage = 'Strong password!';
	}

	return returnObject;
};
