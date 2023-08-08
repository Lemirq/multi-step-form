import { FC, useContext } from 'react';
import context from '../context';
import { motion, AnimatePresence } from 'framer-motion';
import Switch from 'react-switch';
import Button from '../common/Button';

const Step2: FC = () => {
	const { plan, setPlan, planType, setPlanType, nextStep, prevStep, subscriptionPlans } = useContext(context);
	return (
		<>
			{/* Desktop Version */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				className="h-full col-span-3 text-marine-blue md:fc hidden"
			>
				<div className="w-full fc py-16 items-start max-w-[75%]">
					<h1 className="text-4xl font-bold mb-2">Select your plan</h1>
					<p className="text-cool-gray">You have the option of monthly or yearly billing.</p>
					<div className="fr w-full gap-4 my-10">
						{subscriptionPlans.map((item, index) => (
							<div
								key={index}
								onClick={() => setPlan(index)}
								className={`px-3 py-4 w-full fc justify-between rounded-xl border border-cool-gray transition-colors cursor-pointer ${
									plan === index ? 'border-purplish-blue bg-magnolia' : ''
								}`}
							>
								<div className="fr justify-start w-full mb-10">
									<img src={item.icon} />
								</div>
								<div className="fc w-full items-start">
									<p className="font-bold text-base">{item.title}</p>
									<p className="text-sm text-cool-gray">{`$${
										planType === 'm' ? item.price.m + '/month' : item.price.y + '/year'
									}`}</p>
									<AnimatePresence>
										{planType === 'y' && (
											<motion.p
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: 'auto', opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												className="text-marine-blue text-sm font-bold"
											>
												2 months free
											</motion.p>
										)}
									</AnimatePresence>
								</div>
							</div>
						))}
					</div>
					<div className="w-full fr justify-evenly bg-magnolia rounded-xl py-3">
						<p className={`text-lg text-cool-gray transition-colors ${planType === 'm' ? 'text-marine-blue' : ''}`}>Monthly</p>
						<Switch
							offColor="#02295A"
							onColor="#02295A"
							handleDiameter={18}
							height={24}
							width={45}
							boxShadow="none"
							uncheckedIcon={false}
							checkedIcon={false}
							activeBoxShadow="none"
							checked={planType === 'm' ? false : true}
							onChange={(e) => setPlanType(e ? 'y' : 'm')}
						/>
						<p className={`text-lg text-cool-gray transition-colors ${planType === 'y' ? 'text-marine-blue' : ''}`}>Yearly</p>
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
					<h1 className="text-3xl font-bold mb-2">Select Your Plan</h1>
					<p className="text-cool-gray text-sm">You have the option of monthly or yearly billing.</p>
					<div className="fc w-full gap-4 my-5">
						{subscriptionPlans.map((item, index) => (
							<div
								key={index}
								onClick={() => setPlan(index)}
								className={`px-3 py-4 w-full fr items-start justify-start gap-3 rounded-xl border border-cool-gray transition-colors cursor-pointer ${
									plan === index ? 'border-purplish-blue bg-magnolia' : ''
								}`}
							>
								<div className="fc items-start w-full h-full max-w-[40px]">
									<img src={item.icon} />
								</div>
								<div className="fc items-start">
									<p className="font-bold text-base">{item.title}</p>
									<p className="text-sm text-cool-gray">{`$${
										planType === 'm' ? item.price.m + '/month' : item.price.y + '/year'
									}`}</p>
									<AnimatePresence>
										{planType === 'y' && (
											<motion.p
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: 'auto', opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												className="text-marine-blue text-sm font-bold"
											>
												2 months free
											</motion.p>
										)}
									</AnimatePresence>
								</div>
							</div>
						))}
					</div>
					<div className="w-full fr justify-evenly bg-magnolia rounded-xl py-3">
						<p className={`text-lg text-cool-gray transition-colors ${planType === 'm' ? 'text-marine-blue' : ''}`}>Monthly</p>
						<Switch
							offColor="#02295A"
							onColor="#02295A"
							handleDiameter={18}
							height={24}
							width={45}
							boxShadow="none"
							uncheckedIcon={false}
							checkedIcon={false}
							activeBoxShadow="none"
							checked={planType === 'm' ? false : true}
							onChange={(e) => setPlanType(e ? 'y' : 'm')}
						/>
						<p className={`text-lg text-cool-gray transition-colors ${planType === 'y' ? 'text-marine-blue' : ''}`}>Yearly</p>
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

export default Step2;
