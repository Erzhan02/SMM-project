const AppButton = ({
	className = '',
	type,
	isActive = false,
	onClick,
	children,
	...props
}) => {
	const baseClass = 'button';
	const activeClass = isActive ? 'is-active' : '';

	return (
		<button
			className={`${baseClass} ${activeClass} ${className}`.trim()}
			type={type}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};

export default AppButton;
