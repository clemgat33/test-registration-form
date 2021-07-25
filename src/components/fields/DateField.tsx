import React, {useContext} from 'react';
import {AppContext} from '../../state/context';
import { getMaxBirthDate, isDateValid} from '../../utils/validations';

import {  Field, Validation } from '../../interfaces';
type Props = {
  name: string;
  field: Field;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleOnFocusOut: (e: React.ChangeEvent<HTMLInputElement>, validation: Validation | undefined) => void;
}

export default function DateField({name, field, handleChange, handleOnFocusOut}: Props): JSX.Element{
	const {state: {inputs, errors}} = useContext(AppContext);

	const minAge = field.validation?.min || 0;
	const maxDate = getMaxBirthDate(minAge);

	//check if age is valid
	function handleChangeDate(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>){
		const value = e.currentTarget.value;
	  if(name !== 'dateofbirth' || (name === 'dateofbirth' && isDateValid(value, minAge))){
		    handleChange(e);
		}
	}

	return(
		<div className='field'>
			<div className='field-wrapper'>
				<label>{field.label} {field.required ? '*' : ''}</label>
				<input
					type={field.type}
					name={name}
					value={inputs[name]}
					required={field.required}
					min='1930-01-01'
					max={maxDate}
					onChange={handleChangeDate}
					onBlur={(e) => handleOnFocusOut(e, field.validation)}
				/>
				<span className="input_bottom_line"></span>
			</div>
			<div className='message-error'>{errors[name]}</div>
		</div>
	);
}
