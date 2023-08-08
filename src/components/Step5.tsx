import { FC, useContext } from 'react';
import context from '../context';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';

interface FormData {
	name: string;
	email: string;
	phone: string;
}

const Step5: FC = () => {
	const { nextStep } = useContext(context);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = (data) => {
		nextStep();
		console.log(data);
	};

	const inputClasses: string =
		'w-full p-2 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent w-full';

	const labelClasses: string = 'text-sm font-medium text-gray-700 w-full mb-1';

	const errorClasses: string = 'text-sm text-red-500 mt-2';

	const inputContainerClasses: string = 'flex flex-col mb-4 w-full';

	const getAnimatedError = (error: string | undefined) => {
		return (
			<motion.p
				initial={{ opacity: 0, height: 0 }}
				animate={{ opacity: 1, height: 'auto' }}
				exit={{ opacity: 0, height: 0 }}
				transition={{ duration: 0.2 }}
				className={errorClasses}
			>
				{error}
			</motion.p>
		);
	};

	return (
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

					<button type="submit" className="px-5 py-2 mt-10 bg-marine-blue rounded-lg text-white">
						Next Step
					</button>
				</form>
			</div>
		</motion.div>
	);
};

export default Step5;
