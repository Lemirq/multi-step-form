import { useState } from 'react';
import { animated, useSpring, useChain, useSpringRef } from 'react-spring';

interface CheckboxProps {
	defaultChecked: boolean;
	onChange: (id: string, isChecked: boolean) => void;
	id: string;
}

function Checkbox({ defaultChecked, onChange, id }: CheckboxProps): JSX.Element {
	const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);
	const [checkmarkLength, setCheckmarkLength] = useState<string | number | undefined>(undefined);

	const checkboxAnimationRef = useSpringRef();

	const checkboxAnimationStyle = useSpring({
		backgroundColor: isChecked ? 'hsl(243, 100%, 62%)' : '#fff',
		borderColor: isChecked ? 'hsl(228, 100%, 84%)' : '#ddd',
		ref: checkboxAnimationRef,
	});

	const checkmarkAnimationRef = useSpringRef();

	const checkmarkAnimationStyle = useSpring({
		x: isChecked ? 0 : checkmarkLength!,
		ref: checkmarkAnimationRef,
	});

	useChain(
		isChecked ? [checkboxAnimationRef, checkmarkAnimationRef] : [checkmarkAnimationRef, checkboxAnimationRef],
		[0, 0.1] // -> delay by 0.1 seconds
	);

	return (
		<>
			<input
				data-id={id}
				type="checkbox"
				onChange={(e) => {
					setIsChecked(!isChecked);
					onChange(id, e.target.checked);
				}}
				defaultChecked={defaultChecked}
			/>
			<animated.svg
				style={checkboxAnimationStyle}
				className="inline-block h-6 w-6  border-2 mr-1 rounded-md p-[2px] cursor-pointer"
				// This element is purely decorative so
				// we hide it for screen readers
				aria-hidden="true"
				viewBox="0 0 15 11"
				fill="none"
			>
				<animated.path
					ref={(ref) => {
						if (ref) {
							setCheckmarkLength(ref.getTotalLength());
						}
					}}
					stroke="#fff"
					strokeDasharray={checkmarkLength}
					strokeDashoffset={checkmarkAnimationStyle.x}
					d="M1 4.5L5 9L14 1"
					strokeWidth="2"
				/>
			</animated.svg>
		</>
	);
}

export default Checkbox;
