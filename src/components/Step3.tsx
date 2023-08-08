import { FC, useContext } from 'react';
import context from '../context';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import Checkbox from '../common/Checkbox';

const Step3: FC = () => {
	const { nextStep, prevStep, planType, addons, setAddons } = useContext(context);
	const handleCheck = (id: string, checked: boolean) => {
		const index: number = parseInt(id);

		const updatedItems = [...addons];
		updatedItems[index] = {
			...updatedItems[index],
			checked: checked,
		};

		// Update the state with the new array
		setAddons(updatedItems);
	};
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				className="hidden md:fc h-full col-span-3 text-marine-blue"
			>
				<div className="w-full fc py-16 items-start max-w-[75%]">
					<h1 className="text-4xl font-bold mb-2">Pick add-ons</h1>
					<p className="text-cool-gray">Add-ons help enhance your gaming experience.</p>
					<div className="fc w-full gap-4 my-10">
						{addons.map((item, index) => (
							<label
								id={`${index}`}
								key={index}
								className={`px-3 py-4 w-full fr justify-between rounded-xl border border-cool-gray transition-colors cursor-pointer ${
									item.checked ? 'border-purplish-blue bg-magnolia' : ''
								}`}
							>
								<div className="fr gap-4">
									<Checkbox id={`${index}`} onChange={handleCheck} defaultChecked={item.checked} />
									<div className="fc items-start">
										<p className="font-bold">{item.title}</p>
										<p className="text-sm text-cool-gray">{item.description}</p>
									</div>
								</div>
								<p className="text-purplish-blue text-sm">{planType === 'm' ? `+$${item.price.m}/mo` : `+$${item.price.y}/yr`}</p>
							</label>
						))}
					</div>
					<div className="fr justify-between w-full mt-14">
						<Button onClick={prevStep} type="secondary" label="Go Back" />
						<Button onClick={nextStep} label="Next Step" />
					</div>
				</div>
			</motion.div>
			{/* Mobile Version */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				className="fc text-marine-blue md:hidden px-5 z-10 -mt-16"
			>
				<div className="w-full fc items-start bg-alabaster rounded-xl p-5">
					<h1 className="text-3xl font-bold mb-2">Pick add-ons</h1>
					<p className="text-cool-gray text-sm">Add-ons help enhance your gaming experience.</p>
					<div className="fc w-full gap-4 my-10">
						{addons.map((item, index) => (
							<label
								id={`${index}`}
								key={index}
								className={`px-3 py-4 w-full fr justify-between rounded-xl border border-cool-gray transition-colors cursor-pointer ${
									item.checked ? 'border-purplish-blue bg-magnolia' : ''
								}`}
							>
								<div className="fr gap-4">
									<Checkbox id={`${index}`} onChange={handleCheck} defaultChecked={item.checked} />
									<div className="fc items-start">
										<p className="font-bold text-sm">{item.title}</p>
										<p className="text-xs text-cool-gray">{item.description}</p>
									</div>
								</div>
								<p className="text-purplish-blue text-xs">{planType === 'm' ? `+$${item.price.m}/mo` : `+$${item.price.y}/yr`}</p>
							</label>
						))}
					</div>
					<div className="fr justify-between bg-alabaster fixed p-4 bottom-0 left-0 right-0 w-full mt-16">
						<Button onClick={prevStep} type="secondary" label="Go Back" />
						<Button onClick={nextStep} label="Next Step" />
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Step3;
