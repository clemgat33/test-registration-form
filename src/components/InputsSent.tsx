import React, {useContext} from 'react';
import {AppContext} from '../state/context';

export default function InputsSent(): JSX.Element {

	const {state: {inputs}, dispatch} = useContext(AppContext);

	function refresh() {
		dispatch({
			type: 'RESET_RESULT'
		});
		dispatch({
			type: 'RESET_INPUTS'
		});
		dispatch({
			type: 'RESET_STEP'
		});
	}

	return (
		<div>
			<div className='input-values'>
				{
					Object.keys(inputs).map((key: string) => (
						<div key={key} className='input-value'>
							<div>{key}: </div>
							<div>{inputs[key]}</div>
						</div>
					))
				}
			</div>
			<button onClick={refresh}>Refresh</button>
		</div>
	);
}
