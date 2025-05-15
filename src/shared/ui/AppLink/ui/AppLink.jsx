import { Link } from 'react-router-dom';

const AppLink = ({ className = '', to, ariaLabel, children, ...props }) => {
	const baseClass = 'link';
	return (
		<Link
			to={to}
			className={`${baseClass} ${className}`.trim()}
			aria-label={ariaLabel}
			{...props}
		>
			{children}
		</Link>
	);
};

export default AppLink;
