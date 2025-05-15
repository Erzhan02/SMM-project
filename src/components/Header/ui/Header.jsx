import AppButton from '@/shared/ui/AppButton/ui/AppButton';
import AppLink from '@/shared/ui/AppLink/ui/AppLink';
import BurgerButton from '@/shared/ui/BurgerButton/ui/BurgerButton';
import { useState } from 'react';

const Header = () => {
	const [isActive, setIsActive] = useState(false);

	const handleBurgerClick = () => {
		setIsActive(prevState => !prevState);
	};

	return (
		<header className={`header ${isActive ? 'is-active' : ''}`} data-js-header>
			<div className='header__body'>
				<div className='header__body-inner container'>
					<AppLink
						className='header__logo logo'
						to='/'
						ariaLabel='Home'
						title='Home'
					>
						smm.com
					</AppLink>
					<div
						className={`header__overlay ${isActive ? 'is-active' : ''}`}
						data-js-header-overlay
					>
						<nav className='header__menu'>
							<ul className='header__menu-list'>
								<li className='header__menu-item'>
									<AppLink to='/curators' className='header__menu-link'>
										кураторы
									</AppLink>
								</li>
								<li className='header__menu-item'>
									<AppLink to='/programs' className='header__menu-link'>
										программа
									</AppLink>
								</li>
								<li className='header__menu-item'>
									<AppLink to='/tariffs' className='header__menu-link'>
										тарифы
									</AppLink>
								</li>
								<li className='header__menu-item'>
									<AppLink to='/other' className='header__menu-link'>
										прочее
									</AppLink>
								</li>
							</ul>
						</nav>
						<div className='header__auth-field'>
							<AppButton
								type='button'
								className='header__sign-in'
								aria-label='Sign in'
								title='Sign in'
							>
								sign in
							</AppButton>
							<AppButton
								type='button'
								className='header__sign-up'
								aria-label='Sign up'
								title='Sign up'
							>
								sign up
							</AppButton>
						</div>
						<ul className='soc1als__list header-icons'></ul>
					</div>
					<BurgerButton isActive={isActive} onClick={handleBurgerClick} />
				</div>
			</div>
		</header>
	);
};

export default Header;
