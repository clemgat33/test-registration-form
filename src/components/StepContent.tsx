import React, {useContext} from 'react';

import TextField from './fields/TextField';
import DateField from './fields/DateField';
import SelectField from './fields/SelectField';

import {AppContext} from '../state/context';

import { stringLengthCheck, isEmailValid} from '../utils/validations';

import {  Field, Validation } from '../interfaces';





export default function StepContent(): JSX.Element {
	const {state: {activeStep, controller}, dispatch} = useContext(AppContext);



	/* FOCUSOUT */
	function handleOnFocusOut(e: React.ChangeEvent<HTMLInputElement>, validation: Validation | undefined){
		const name = e.currentTarget.name;

		if(validation?.type === 'length' && validation.min && validation.max){
			const valueLength = e.currentTarget.value.length;
			if(!stringLengthCheck(valueLength, validation.min, validation.max)) {
				dispatch({
					type: 'ADD_ERRORS',
					key: name,
					payload: validation.message
				});
			} else {
				dispatch({
					type: 'REMOVE_ERRORS',
					key: name
				});
			}
		} else if(validation?.type === 'email'){
			const email = e.currentTarget.value;
			if(!isEmailValid(email)){
				dispatch({
					type: 'ADD_ERRORS',
					key: name,
					payload: validation.message
				});
			} else {
				dispatch({
					type: 'REMOVE_ERRORS',
					key: name
				});
			}
		}
	}
	/* FOCUSOUT */



	/* ONCHANGE */
	function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>){
		const value = e.currentTarget.value;
		const name = e.currentTarget.name;
		dispatch({
			type: 'UPDATE_INPUTS',
			key: name,
			payload: value
		});
	}
	/* ONCHANGE */


	/* FIELDS */
	const fields = controller[activeStep].fields.map((field: Field, key: number) => {
		const name = field.name;
		switch(field.type){
		case 'text':
		case 'email':
			return (
				<TextField
					key={key}
					name={name}
					field={field}
					handleChange={handleChange}
					handleOnFocusOut={handleOnFocusOut}
				/>
			);
		case 'date':
			return (
				<DateField
					key={key}
					name={name}
					field={field}
					handleChange={handleChange}
					handleOnFocusOut={handleOnFocusOut}
				/>
			);
		case 'select':
			return (
				<SelectField
					key={key}
					name={name}
					field={field}
					handleChange={handleChange}
				/>
			);
		}
	});
	/* FIELDS */


	return (
		<>{fields}</>
	);
}
