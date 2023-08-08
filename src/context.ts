import { createContext } from 'react';
import { AppContextType } from './contextTypes';

const defaultContextValue: AppContextType = {
	step: 0,
	setStep: () => {},
	nextStep: () => 0,
	prevStep: () => {},
	plan: 0,
	setPlan: () => {},
	planType: 'm',
	setPlanType: () => {},
	formSubmitted: false,
	setFormSubmitted: () => {},
	FormData: {
		name: '',
		phone: '',
		email: '',
	},
	setFormData: () => {},
	addons: [
		{
			title: 'Online Service',
			description: 'Access to multiplayer games',
			checked: false,
			price: {
				m: 1,
				y: 10,
			},
		},
		{
			title: 'Larger Storage',
			description: 'Extra 1TB of cloud save',
			checked: false,
			price: {
				m: 2,
				y: 20,
			},
		},
		{
			title: 'Customizable profile',
			description: 'Custom theme on your profile',
			checked: false,
			price: {
				m: 2,
				y: 20,
			},
		},
	],
	setAddons: () => {},
	subscriptionPlans: [
		{
			title: 'Arcade',
			price: {
				y: 90,
				m: 9,
			},
			icon: '/images/icon-arcade.svg',
		},
		{
			title: 'Advanced',
			price: {
				y: 120,
				m: 12,
			},
			icon: '/images/icon-advanced.svg',
		},
		{
			title: 'Pro',
			price: {
				y: 150,
				m: 15,
			},
			icon: '/images/icon-pro.svg',
		},
	],
	setComplete: () => {},
	complete: false,
};

const context = createContext<AppContextType>(defaultContextValue);
export default context;
