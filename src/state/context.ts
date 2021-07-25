import React, {createContext } from 'react';

import { Step, Inputs, Errors } from '../interfaces';

import controller from '../controller.json';
import { getInitialInputsValues } from '../utils/getInitialInputsValues';

export const initialState = {
	controller: controller,
	activeStep: 0,
	inputs: getInitialInputsValues(),
	errors: {},
	isSent: false
};

export interface Context {
	controller: Step[];
	activeStep: number;
	inputs: Inputs;
	errors: Errors;
	isSent: boolean;
}

export const AppContext = createContext<{
  state: Context;
  dispatch: React.Dispatch<any>; // eslint-disable-line
}>({
	state: initialState,
	dispatch: () => null
});
