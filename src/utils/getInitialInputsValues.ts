//get initial values o create inputs state and refresh
import controller from '../controller.json';

import { Field, Inputs } from '../interfaces';

export function getInitialInputsValues(): Inputs {
	let initialValues = {};
	controller.map((step) => {
		step.fields.map((field: Field) => {
			const name = field.label.replace(/\s/g, '').toLowerCase();
			initialValues = {...initialValues, [name]: ''};
		});
	});
	return initialValues;
}
