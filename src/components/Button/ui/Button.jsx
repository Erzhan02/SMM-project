import { useState } from 'react';
import './Button.scss';

const Button = ({ children }) => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(prevState => !prevState);
	};

	return (
		<button
			className={`button ${isActive ? 'is-active' : ''}`}
			onClick={handleClick}
		>
			{children}
		</button>
	);
};

export default Button;
