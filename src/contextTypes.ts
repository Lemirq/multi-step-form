// contextTypes.ts
import { Dispatch, SetStateAction } from 'react';

export interface addonItem {
	title: string;
	description: string;
	checked: boolean;
	price: {
		m: number;
		y: number;
	};
}
export interface subPlan {
	title: string;
	price: { y: number; m: number };
	icon: string;
}

export type AppContextType = {
	step: number;
	setStep: Dispatch<SetStateAction<number>>;
	nextStep: () => void;
	prevStep: () => void;
	plan: number;
	setPlan: Dispatch<SetStateAction<number>>;
	planType: string;
	setPlanType: Dispatch<SetStateAction<string>>;
	formSubmitted: boolean;
	setFormSubmitted: Dispatch<SetStateAction<boolean>>;
	FormData: { name: string; email: string; phone: string };
	setFormData: Dispatch<SetStateAction<{ name: string; email: string; phone: string }>>;
	addons: addonItem[];
	setAddons: Dispatch<SetStateAction<addonItem[]>>;
	subscriptionPlans: subPlan[];
	setComplete: Dispatch<SetStateAction<boolean>>;
	complete: boolean;
};
