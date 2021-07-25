import React, {useContext} from 'react';
import {Stepper, Step as StepMI, StepLabel} from '@material-ui/core';

import {AppContext} from '../state/context';

import InputsSent from './InputsSent';
import Step from './Step';


export default function RegistrationForm(): JSX.Element{
	const {state: {activeStep, controller, isSent}} = useContext(AppContext);


	/* STEPS */
	const steps = [...getSteps(), 'End'];
	function getSteps() {
  	return controller.map(step =>  step.name);
	}
	/* STEPS */


	return(
		<div className='container-form'>
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map((label) => (
					<StepMI key={label}>
						<StepLabel>{label}</StepLabel>
					</StepMI>
				))}
			</Stepper>
			{!isSent ? (
				<Step />
			) : (
				<InputsSent />
			)}
		</div>
	);
}
