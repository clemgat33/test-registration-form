//get initial values o create inputs state and refresh
import controller from '../controller.json';

import { Field, Inputs } from '../interfaces';

export function getInitialInputsValues(): Inputs {
	let initialValues = {};
	controller.map((step) => {
		step.fields.map((field: Field) => {
			const name = field.label.replace(/\s/g, '').toLowerCase();
			//add the first option in the select component, because it will be empty if the client doesnt choose any
			if(field.type === 'select' && field.options){
				initialValues = {...initialValues, [name]: field.options[0]};
			} else {
				initialValues = {...initialValues, [name]: ''};
			}
		});
	});
	return initialValues;
}
