import React, {useContext} from 'react';
import {AppContext} from '../../state/context';
import {  Field, Validation } from '../../interfaces';

type Props = {
  name: string;
  field: Field;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleOnFocusOut: (e: React.ChangeEvent<HTMLInputElement>, validation: Validation | undefined) => void;
}

export default function TextField({name, field, handleChange, handleOnFocusOut}: Props): JSX.Element{
	const {state: {inputs, errors}} = useContext(AppContext);


	return(
		<div className={`field ${errors[name] ? 'field-error' : '' }`} >
			<div className='field-wrapper'>
				<label>{field.label} {field.required ? '*' : ''}</label>
				<input
					type={field.type}
					name={name}
					value={inputs[name]}
					required={field.required}
					onChange={handleChange}
					onBlur={(e) => handleOnFocusOut(e, field.validation)}
				/>
				<span className="input_bottom_line"></span>
			</div>
			<div className='message-error'>{errors[name]}</div>
		</div>
	);
}
