import { FC, useEffect, useState } from 'react';
import Number from './components/Number';
import context from './context';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import { AppContextType, addonItem, subPlan } from './contextTypes';
import { AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
const steps: { title: string }[] = [
	{
		title: 'Your Info',
	},
	{
		title: 'Select Plan',
	},
	{
		title: 'Add-ons',
	},
	{
		title: 'Summary',
	},
];

const subscriptionPlans: subPlan[] = [
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
];

const App: FC = () => {
	const [step, setStep] = useState(0);
	const [plan, setPlan] = useState(0);
	const [planType, setPlanType] = useState('m');
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [complete, setComplete] = useState(false);
	const [FormData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
	});
	const [resize, setResize] = useState(window.innerWidth);
	const [addons, setAddons] = useState<addonItem[]>([
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
	]);

	const nextStep = () => {
		setStep(step + 1);
	};

	const prevStep = () => {
		setStep((step) => (step === 0 ? 0 : step - 1));
	};

	const contextValue: AppContextType = {
		step,
		setStep,
		nextStep,
		prevStep,
		plan,
		setPlan,
		planType,
		setPlanType,
		formSubmitted,
		setFormSubmitted,
		FormData,
		setFormData,
		subscriptionPlans,
		addons,
		setAddons,
		complete,
		setComplete,
	};

	const handleStepSet = (i: number) => {
		if (!formSubmitted) {
			toast.error('Please fill out and submit the form first.');
			return;
		}
		setStep(i);
	};

	// useEffect(() => {
	// 	console.log(addons);
	// }, [addons]);

	const windowResizeHandler = () => {
		setResize(window.innerWidth);
		return window.innerWidth;
	};

	useEffect(() => {
		window.addEventListener('resize', windowResizeHandler);

		return () => {
			window.removeEventListener('resize', windowResizeHandler);
		};
	}, []);

	useEffect(() => {
		if (complete) console.log('nigga balls');
	}, [complete]);

	const iOSSafari =
		navigator.userAgent.match(/iPad/i) ||
		(navigator.userAgent.match(/iPhone/i) && navigator.userAgent.match(/WebKit/i) && !navigator.userAgent.match(/CriOS/i));

	return (
		<context.Provider value={contextValue}>
			<>
				<Toaster position="top-center" />
				{resize > 768 ? (
					<div id="desktop" className="w-screen h-screen fc bg-magnolia font-ubuntu p-10">
						<div className="rounded-2xl bg-alabaster grid grid-cols-5 p-4 w-full max-w-6xl">
							<div className="col-span-2 bg-[url('/images/bg-sidebar-desktop.svg')] bg-bottom bg-no-repeat bg-cover rounded-2xl p-10 text-white fc justify-between">
								<div className="fc items-start w-full">
									{steps.map((item, i) => (
										<div
											key={i}
											onClick={() => handleStepSet(i)}
											className="fr gap-3 bg-transparent hover:bg-white/20 transition-colors w-full p-3 rounded-xl justify-start cursor-pointer"
										>
											<Number active={i === step ? true : false} number={i + 1} />
											<div className="fc gap-1 items-start">
												<p className="text-sm text-cool-gray">Step {i + 1}</p>
												<p className="text-xl uppercase font-bold">{item.title}</p>
											</div>
										</div>
									))}
								</div>
							</div>
							<AnimatePresence mode="wait">
								{step === 0 && <Step1 />}
								{step === 1 && <Step2 />}
								{step === 2 && <Step3 />}
								{step === 3 && <Step4 />}
							</AnimatePresence>
						</div>
					</div>
				) : (
					<div
						id="mobile"
						className={`w-screen sm:min-h-screen ${
							iOSSafari ? 'min-h-[-webkit-fill-available]' : 'h-screen'
						} fc justify-start bg-magnolia font-ubuntu`}
					>
						<div className="bg-magnolia w-full h-full overflow-x-hidden">
							<div className="bg-[url('/images/bg-sidebar-desktop.svg')] bg-[100%_85%] bg-no-repeat bg-cover text-white fc justify-between py-20">
								<div className="fr w-full -mt-16">
									{steps.map((_, i) => (
										<div
											key={i}
											onClick={() => handleStepSet(i)}
											className="fr gap-3 bg-transparent hover:bg-white/20 transition-colors p-3 rounded-xl justify-start cursor-pointer"
										>
											<Number active={i === step ? true : false} number={i + 1} />
										</div>
									))}
								</div>
							</div>
							<AnimatePresence mode="wait">
								{step === 0 && <Step1 />}
								{step === 1 && <Step2 />}
								{step === 2 && <Step3 />}
								{step === 3 && <Step4 />}
							</AnimatePresence>
						</div>
					</div>
				)}
			</>
		</context.Provider>
	);
};

export default App;
