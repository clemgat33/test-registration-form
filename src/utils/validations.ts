//list of validation functions



// get the max birth date to be more than 18yo
export function getMaxBirthDate(age: number): string{
	let maxBirthDate = new Date();
	maxBirthDate = new Date(maxBirthDate.setFullYear(maxBirthDate.getFullYear() - age));

	const maxYear = maxBirthDate.getFullYear().toString();

	//if month is like 7 => make it like 07
	let maxMonthOnMaxYear = (maxBirthDate.getMonth() + 1).toString();
	if(maxMonthOnMaxYear.length === 1) maxMonthOnMaxYear = '0' + maxMonthOnMaxYear;

	//if day is like 7 => make it like 07
	let maxDayOnMaxMonthOnMaxYear = maxBirthDate.getDate().toString();
	if(maxDayOnMaxMonthOnMaxYear.length === 1) maxDayOnMaxMonthOnMaxYear = '0' + maxDayOnMaxMonthOnMaxYear;

	const maxBirthDateToString = maxYear + '-' + maxMonthOnMaxYear + '-' + maxDayOnMaxMonthOnMaxYear;
	return maxBirthDateToString;
}



// check if the date entered in the input is more than 18yo
export function isDateValid(date: string, age: number): boolean {
	const year = parseInt(date.slice(0, 4));
	const month = parseInt(date.slice(5, 7));
	const day = parseInt(date.slice(8, 10));
	const maxBirthDate = getMaxBirthDate(age);
	const maxYear = parseInt(maxBirthDate.slice(0, 4));
	const maxMonthOnMaxYear = parseInt(maxBirthDate.slice(5, 7));
	const maxDayOnMaxMonthOnMaxYear = parseInt(maxBirthDate.slice(8, 10));
	if (year < maxYear) {
		return true;
	}
	if (year == maxYear) {
		if (month < maxMonthOnMaxYear) {
			return true;
		}
		if (month == maxMonthOnMaxYear) {
			if (day <= maxDayOnMaxMonthOnMaxYear) {
				return true;
			}
		}
	}
	return false;
}



// check if string length is between min and max
export function stringLengthCheck(valueLenght: number, minlength: number, maxlength: number): boolean {
	if(valueLenght < minlength || valueLenght > maxlength) return false;
	else return true;
}



//check if email is valid
export function isEmailValid(email: string): boolean {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
