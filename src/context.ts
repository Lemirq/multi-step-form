import { createContext } from 'react';
import { AppContextType } from './contextTypes';

const defaultContextValue: AppContextType = {
	step: 0,
	setStep: () => {},
	nextStep: () => 0,
};

const context = createContext<AppContextType>(defaultContextValue);
export default context;
