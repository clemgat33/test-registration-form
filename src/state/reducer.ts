import { getInitialInputsValues } from '../utils/getInitialInputsValues';

import {Context, initialState} from './context';

import {  Inputs, Errors } from '../interfaces';
interface Action {
	type?: string;
	key?: string;
	payload?: string | undefined
}

export const activeStepReducer = (state: number, action: Action): number => {
	switch (action.type){
	case 'INCREMENT_STEP':
		return state + 1;
	case 'DECREMENT_STEP':
		return state - 1;
	case 'RESET_STEP':
		return initialState.activeStep;
	default:
		return state;
	}
};

export const inputsReducer = (state: Inputs, action: Action): Inputs => {
	const name = action.key;

	switch (action.type){
	case 'UPDATE_INPUTS':
		if (name !== undefined && state[name] !== undefined){
			state[name] = action.payload;
		}
		return state;
	case 'RESET_INPUTS':
		return getInitialInputsValues();
	default:
		return state;
	}
};

export const errorsReducer = (state: Errors, action: Action): Errors => {
	const name = action.key;

	switch (action.type){
	case 'ADD_ERRORS':
		if (name !== undefined){
			state[name] = action.payload;
		}
		return state;
	case 'REMOVE_ERRORS':
		if (name !== undefined){
			const { [name]: e, ...newState } = state; // eslint-disable-line
			return newState;
		}
		return state;
	case 'RESET_ERRORS':
		return initialState.inputs;
	default:
		return state;
	}
};

export const isSentReducer = (state: boolean, action: Action): boolean => {
	switch (action.type){
	case 'SEND_RESULT':
		return true;
	case 'RESET_RESULT':
		return initialState.isSent;
	default:
		return state;
	}
};


export const mainReducer = ({ activeStep, inputs, errors, isSent  }: Context, action: Action): Context => ({
	activeStep: activeStepReducer(activeStep, action),
	inputs: inputsReducer(inputs, action),
	errors: errorsReducer(errors, action),
	controller: initialState.controller,
	isSent: isSentReducer(isSent, action)
});
