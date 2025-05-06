import { Link } from 'react-router-dom';

const AppLink = ({ to, children }) => {
	return <Link to={to}>{children}</Link>;
};

export default AppLink;
