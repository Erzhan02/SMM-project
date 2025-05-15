const AppSection = ({ className = '', children }) => {
	const baseClass = 'section';
	return (
		<section className={`${baseClass} ${className}`.trim()}>{children}</section>
	);
};

export default AppSection;
