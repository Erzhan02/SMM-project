import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
	const [isActive, setIsActive] = useState(false);

	const handleBurgerClick = () => {
		setIsActive(prevState => !prevState);
	};

	return (
		<header className={`header ${isActive ? 'is-active' : ''}`} data-js-header>
			<div className='header__body'>
				<div className='header__body-inner container'>
					<Link
						className='header__logo logo'
						to={'/'}
						aria-label='Home'
						title='Home'
					>
						smm.com
					</Link>
					<div
						className={`header__overlay ${isActive ? 'is-active' : ''}`}
						data-js-header-overlay
					>
						<nav className='header__menu'>
							<ul className='header__menu-list'>
								<li className='header__menu-item'>
									<Link to={'/curators'} className='header__menu-link'>
										кураторы
									</Link>
								</li>
								<li className='header__menu-item'>
									<Link to={'/programs'} className='header__menu-link'>
										программа
									</Link>
								</li>
								<li className='header__menu-item'>
									<Link to={'/tariffs'} className='header__menu-link'>
										тарифы
									</Link>
								</li>
								<li className='header__menu-item'>
									<Link to={'/other'} className='header__menu-link'>
										прочее
									</Link>
								</li>
							</ul>
						</nav>
						<div className='header__auth-field'>
							<button
								type='button'
								className='header__sign-in button'
								aria-label='Sign in'
								title='Sign in'
							>
								sign in
							</button>
							<button
								type='button'
								className='header__sign-up button'
								aria-label='Sign up'
								title='Sign up'
							>
								sign up
							</button>
						</div>
						<ul className='soc1als__list header-icons'></ul>
					</div>
					<button
						className={`header__burger-button burger-button visible-mobile ${
							isActive ? 'is-active' : ''
						}`}
						type='button'
						aria-label='Open menu'
						title='Open menu'
						data-js-header-burger-button
						onClick={handleBurgerClick}
					>
						<span className='burger-button__line'></span>
						<span className='burger-button__line'></span>
						<span className='burger-button__line'></span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
