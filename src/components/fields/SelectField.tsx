import React, {useContext} from 'react';
import {AppContext} from '../../state/context';
import {  Field } from '../../interfaces';

type Props = {
  name: string;
  field: Field;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function SelectField({name, field, handleChange}: Props): JSX.Element{
	const {state: {inputs, errors}} = useContext(AppContext);


	return(
		<div className='field'>
			<div className='field-wrapper'>
				<label>{field.label}</label>
				<select
					name={name}
					value={inputs[name]}
					required={field.required}
					onChange={handleChange}
				>
					<option  value=''>Select one option</option>
					{field.options?.map((value, key) => (
						<option key={key} value={value}>{value}</option>
					))}
				</select>
			</div>
			<div className='message-error'>{errors[name]}</div>
		</div>
	);
}
