import { FC, useContext, useEffect } from 'react';
import context from '../context';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../common/Button';
interface FormData {
	name: string;
	email: string;
	phone: string;
}

const Step1: FC = () => {
	const { nextStep, setFormSubmitted, FormData, setFormData } = useContext(context);

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = (data) => {
		setFormSubmitted(true);
		setFormData(data);
		nextStep();
	};

	useEffect(() => {
		setValue('email', FormData.email);
		setValue('phone', FormData.phone);
		setValue('name', FormData.name);
	}, []);

	const inputClasses: string =
		'w-full p-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent w-full';

	const labelClasses: string = 'text-sm font-medium text-gray-700 w-full mb-1';

	const inputContainerClasses: string = 'flex flex-col mb-4 w-full';

	const getAnimatedError = (error: string | undefined) => {
		return (
			<motion.p
				initial={{ opacity: 0, height: 0 }}
				animate={{ opacity: 1, height: 'auto' }}
				exit={{ opacity: 0, height: 0 }}
				transition={{ duration: 0.2 }}
				className="text-sm text-strawberry-red mt-2"
			>
				{error}
			</motion.p>
		);
	};

	return (
		<>
			{window.innerWidth > 768 ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="fc h-full col-span-3 text-marine-blue"
				>
					<div className="w-full fc py-16 items-start max-w-[75%]">
						<h1 className="text-4xl font-bold mb-2">Personal Info</h1>
						<p className="text-cool-gray">Please provide your name, email address, and phone number.</p>
						<form onSubmit={handleSubmit(onSubmit)} className="w-full fc items-end mt-14">
							<div className={inputContainerClasses}>
								<label className={labelClasses}>Name</label>
								<input placeholder="e.g. Stephen King" className={inputClasses} {...register('name', { required: true })} />
								<AnimatePresence>{errors.name && getAnimatedError('This field is required')}</AnimatePresence>
							</div>

							<div className={inputContainerClasses}>
								<label className={labelClasses}>Email</label>
								<input
									placeholder="e.g. stephenking@lorem.com"
									className={inputClasses}
									{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
								/>
								<AnimatePresence>
									{errors.email?.type === 'required' && getAnimatedError('This field is required')}
									{errors.email?.type === 'pattern' && getAnimatedError('Invalid email format')}
								</AnimatePresence>
							</div>

							<div className={inputContainerClasses}>
								<label className={labelClasses}>Phone</label>
								<input
									placeholder="e.g. 234 576 2352"
									className={inputClasses}
									{...register('phone', { required: true, pattern: /^[0-9]{10}$/ })}
								/>
								<AnimatePresence>
									{errors.phone?.type === 'required' && getAnimatedError('This field is required')}
									{errors.phone?.type === 'pattern' && getAnimatedError('Invalid phone number format')}
								</AnimatePresence>
							</div>

							<Button label="Next Step" />
						</form>
					</div>
				</motion.div>
			) : (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="fc text-marine-blue px-5 z-10 -mt-16"
				>
					<div className="w-full fc items-start bg-alabaster rounded-xl p-5">
						<h1 className="text-3xl font-bold mb-2">Personal Info</h1>
						<p className="text-cool-gray text-sm">Please provide your name, email address, and phone number.</p>
						<form onSubmit={handleSubmit(onSubmit)} className="w-full fc items-end mt-8">
							<div className={inputContainerClasses}>
								<label className={labelClasses}>Name</label>
								<input placeholder="e.g. Stephen King" className={inputClasses} {...register('name', { required: true })} />
								<AnimatePresence>{errors.name && getAnimatedError('This field is required')}</AnimatePresence>
							</div>

							<div className={inputContainerClasses}>
								<label className={labelClasses}>Email</label>
								<input
									placeholder="e.g. stephenking@lorem.com"
									className={inputClasses}
									{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
								/>
								<AnimatePresence>
									{errors.email?.type === 'required' && getAnimatedError('This field is required')}
									{errors.email?.type === 'pattern' && getAnimatedError('Invalid email format')}
								</AnimatePresence>
							</div>

							<div className={inputContainerClasses}>
								<label className={labelClasses}>Phone</label>
								<input
									placeholder="e.g. 234 576 2352"
									className={inputClasses}
									{...register('phone', { required: true, pattern: /^[0-9]{10}$/ })}
								/>
								<AnimatePresence>
									{errors.phone?.type === 'required' && getAnimatedError('This field is required')}
									{errors.phone?.type === 'pattern' && getAnimatedError('Invalid phone number format')}
								</AnimatePresence>
							</div>

							<div className="w-screen fr justify-end bg-alabaster absolute p-4 bottom-0 right-0 left-0">
								<Button label="Next Step" />
							</div>
						</form>
					</div>
				</motion.div>
			)}
		</>
	);
};

export default Step1;
