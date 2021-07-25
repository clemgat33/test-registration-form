import React, {useContext} from 'react';
import {AppContext} from '../state/context';

import StepContent from './StepContent';



export default function Step(): JSX.Element{
	const {state: {activeStep, controller, errors}, dispatch} = useContext(AppContext);


	/* BUTTON NAME */
	const getButtonName = () => {
		if(activeStep === (controller.length - 1)){
			return 'Finish';
		} else {
			return 'Next';
		}
	};
	/* BUTTON NAME */


	/* ONSUBMIT */
	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		//check if no errors
		if(Object.keys(errors).length === 0){
			dispatch({
				type: 'INCREMENT_STEP'
			});
			// check if last step to => handlefinish
			if(activeStep === (controller.length - 1)){
				dispatch({
					type: 'SEND_RESULT'
				});
			}
		}
	}
	/* ONSUBMIT */


	return (
		<form onSubmit={handleSubmit}>
			<div className='step'>
				<div className='fields'>
					<StepContent	/>
				</div>
				<div className='required'>*required fields</div>
				<button type='submit'>{getButtonName()}</button>
			</div>
		</form>
	);
}
