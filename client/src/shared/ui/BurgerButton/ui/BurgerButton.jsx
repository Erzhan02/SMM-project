import AppButton from '@/shared/ui/AppButton/ui/AppButton';

const BurgerButton = ({ isActive, onClick }) => {
	return (
		<AppButton
			className={`header__burger-button burger-button visible-mobile ${
				isActive ? 'is-active' : ''
			}`}
			type='button'
			aria-label='Open menu'
			title='Open menu'
			data-js-header-burger-button
			onClick={onClick}
		>
			<span className='burger-button__line'></span>
			<span className='burger-button__line'></span>
			<span className='burger-button__line'></span>
		</AppButton>
	);
};

export default BurgerButton;
