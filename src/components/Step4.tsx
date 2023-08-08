import { FC, useContext } from 'react';
import context from '../context';
import Button from '../common/Button';
import { AnimatePresence, motion } from 'framer-motion';
const Step4: FC = () => {
	const { prevStep, plan, planType, setComplete, complete, setStep, subscriptionPlans, addons } = useContext(context);
	const planDetails = plan === 0 ? subscriptionPlans[0] : plan === 1 ? subscriptionPlans[1] : subscriptionPlans[2];

	const getTotalCost = (): number => {
		let result = 0;
		result += planDetails.price[planType === 'm' ? 'm' : 'y'];
		addons
			.filter((e) => e.checked)
			.forEach((item) => {
				result += item.price[planType === 'm' ? 'm' : 'y'];
			});
		return result;
	};

	return (
		<>
			<AnimatePresence>
				{complete ? (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						className="h-full col-span-3 text-marine-blue py-28 md:fc hidden"
					>
						<div className="w-full fc py-16 gap-10 max-w-[75%]">
							<img src="/images/icon-thank-you.svg" alt="" />
							<div className="fc gap-5">
								<h1 className="text-5xl font-bold text-marine-blue">Thank You!</h1>
								<p className="text-cool-gray max-w-[70ch] text-center">
									Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please
									feel Free to email us at support@loremgaming.com.
								</p>
							</div>
						</div>
					</motion.div>
				) : (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						className="fc h-full col-span-3 text-marine-blue md:fc hidden"
					>
						<div className="w-full fc py-16 max-w-[75%]">
							<h1 className="text-4xl font-bold mb-2 w-full">Finishing Up</h1>
							<p className="text-cool-gray w-full">Double-check everything looks OK before confirming.</p>
							<div className="bg-magnolia rounded-xl p-5 w-full mt-10 mb-5">
								<div className="fr justify-between">
									<div className="fc items-start gap-1">
										<p className="font-bold">
											{plan === 0
												? `Arcade (${planType === 'm' ? 'Monthly' : 'Yearly'})`
												: plan === 1
												? `Advanced (${planType === 'm' ? 'Monthly' : 'Yearly'})`
												: `Pro (${planType === 'm' ? 'Monthly' : 'Yearly'})`}
										</p>
										<Button className="!text-sm" onClick={() => setStep(1)} label="Change" type="link" />
									</div>
									<p className="font-bold">{`$${
										planType === 'm' ? planDetails.price.m + '/month' : planDetails.price.y + '/year'
									}`}</p>
								</div>
								{addons.filter((e) => e.checked).length !== 0 && <div className="w-full h-[1px] bg-cool-gray/40 my-7" />}
								<div className="fc gap-3 w-full">
									{addons
										.filter((e) => e.checked)
										.map((item, i) => (
											<div key={i} className="w-full fr justify-between">
												<p className="text-sm text-cool-gray">{item.title}</p>
												<p>{planType === 'm' ? `+$${item.price.m}/mo` : `+$${item.price.y}/yr`}</p>
											</div>
										))}
								</div>
							</div>
							<div className="w-[90%] fr justify-between">
								<p className=" text-sm text-cool-gray">{`Total (per ${planType === 'm' ? 'month' : 'year'})`}</p>
								<p className="text-xl font-bold text-purplish-blue">{`$${getTotalCost()}${planType === 'm' ? '/mo' : '/yr'}`}</p>
							</div>
							<div className="fr justify-between w-full mt-14">
								<Button onClick={prevStep} type="secondary" label="Go Back" />
								<Button onClick={() => setComplete(true)} type="submit" label="Submit" />
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{complete ? (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						className="fc text-marine-blue md:hidden px-5 z-10 -mt-10"
					>
						<div className="w-full fc gap-10 py-20 bg-alabaster rounded-xl p-5">
							<img src="/images/icon-thank-you.svg" alt="" />
							<div className="fc gap-5">
								<h1 className="text-5xl font-bold text-marine-blue">Thank You!</h1>
								<p className="text-cool-gray max-w-[70ch] text-center">
									Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please
									feel Free to email us at support@loremgaming.com.
								</p>
							</div>
						</div>
					</motion.div>
				) : (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						className="fc text-marine-blue md:hidden px-5 z-10 -mt-16"
					>
						<div className="w-full fc bg-alabaster rounded-xl p-5">
							<h1 className="text-3xl font-bold mb-2 w-full">Select Your Plan</h1>
							<p className="text-cool-gray text-sm w-full">You have the option of monthly or yearly billing.</p>
							<div className="bg-magnolia rounded-xl p-5 w-full mt-10 mb-5">
								<div className="fr justify-between">
									<div className="fc items-start gap-1">
										<p className="font-bold">
											{plan === 0
												? `Arcade (${planType === 'm' ? 'Monthly' : 'Yearly'})`
												: plan === 1
												? `Advanced (${planType === 'm' ? 'Monthly' : 'Yearly'})`
												: `Pro (${planType === 'm' ? 'Monthly' : 'Yearly'})`}
										</p>
										<Button className="!text-sm" onClick={() => setStep(1)} label="Change" type="link" />
									</div>
									<p className="font-bold">{`$${
										planType === 'm' ? planDetails.price.m + '/month' : planDetails.price.y + '/year'
									}`}</p>
								</div>
								{addons.filter((e) => e.checked).length !== 0 && <div className="w-full h-[1px] bg-cool-gray/40 my-7" />}
								<div className="fc gap-3 w-full">
									{addons
										.filter((e) => e.checked)
										.map((item, i) => (
											<div key={i} className="w-full fr justify-between">
												<p className="text-sm text-cool-gray">{item.title}</p>
												<p>{planType === 'm' ? `+$${item.price.m}/mo` : `+$${item.price.y}/yr`}</p>
											</div>
										))}
								</div>
							</div>
							<div className="w-[90%] fr justify-between">
								<p className=" text-sm text-cool-gray">{`Total (per ${planType === 'm' ? 'month' : 'year'})`}</p>
								<p className="text-xl font-bold text-purplish-blue">{`$${getTotalCost()}${planType === 'm' ? '/mo' : '/yr'}`}</p>
							</div>
							<div className="fr justify-between bg-alabaster fixed p-4 bottom-0 left-0 right-0 w-full mt-16">
								<Button onClick={prevStep} type="secondary" label="Go Back" />
								<Button onClick={() => setComplete(true)} type="submit" label="Submit" />
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Step4;
