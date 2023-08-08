interface Props {
	number: number;
	active: boolean;
}

const Number = ({ number, active }: Props) => {
	return (
		<div
			className={`px-5 fc rounded-full border aspect-square transition-all duration-150 ${
				active ? 'bg-light-blue text-marine-blue border-marine-blue' : 'bg-transparent text-white  border-white'
			}`}
		>
			{number}
		</div>
	);
};

export default Number;
