import { FC } from 'react';

interface btnProps {
	type?: 'secondary' | 'link' | 'submit';
	label: string;
	onClick?: () => void;
	className?: string;
}
const Button: FC<btnProps> = ({ type, label, onClick, className }) => {
	return (
		<>
			{type === 'secondary' ? (
				<button onClick={onClick} type="submit" className={`px-5 py-2 bg-transparent rounded-lg text-cool-gray ${className}`}>
					{label}
				</button>
			) : type === 'link' ? (
				<button onClick={onClick} type="submit" className={`bg-transparent rounded-lg text-cool-gray underline ${className}`}>
					{label}
				</button>
			) : type === 'submit' ? (
				<button onClick={onClick} type="submit" className={`px-5 py-2 bg-purplish-blue rounded-lg text-white ${className}`}>
					{label}
				</button>
			) : (
				<button onClick={onClick && onClick} type="submit" className={`px-5 py-2 bg-marine-blue rounded-lg text-white ${className}`}>
					{label}
				</button>
			)}
		</>
	);
};

export default Button;
