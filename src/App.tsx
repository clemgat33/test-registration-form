import React, {useReducer} from 'react';
import {AppContext, initialState} from './state/context';
import { mainReducer } from './state/reducer';

import './styles/global.scss';

import RegistrationForm from './components/RegistrationForm';


function App(): JSX.Element {
	const [state, dispatch] = useReducer(mainReducer, initialState);

	const {activeStep, controller, inputs, errors, isSent} = state;
	console.log('STATE:\n', {activeStep, controller, inputs, errors, isSent});

	return (
		<AppContext.Provider value={{state, dispatch}}>
			<div className="App">
				<RegistrationForm />
			</div>
		</AppContext.Provider>
	);
}

export default App;
