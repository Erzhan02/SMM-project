import AppButton from '@/shared/ui/AppButton/ui/AppButton';
import AppLink from '@/shared/ui/AppLink/ui/AppLink';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__inner container'>
				<div className='footer__title-wrapper'>
					<h2 className='footer__title'>регистрация</h2>
				</div>
				<div className='footer__body'>
					<form action='' method='' className='footer__form'>
						<input type='text' placeholder='фио*' />
						<input type='text' placeholder='номер*' />
						<input type='email' placeholder='почта*' />
						<input type='text' placeholder='дополнительно*' />
						<AppButton className='footer__form-button button' type='submit'>
							зарегистрироваться
						</AppButton>
					</form>
					<div className='footer__image-wrapper'>
						<img
							className='footer__image'
							src='./images/woman.png'
							alt=''
							loading='lazy'
						/>
					</div>
				</div>
				<div className='footer__extra'>
					<AppLink
						className='footer__logo logo'
						to='/'
						ariaLabel='Home'
						title='Home'
					>
						smm.com
					</AppLink>
					<div className='footer__soc1als soc1als'>
						<ul className='soc1als__list footer-icons'>
							<li className='soc1als__item'>
								<AppLink
									to=''
									className='soc1als__link'
									target='_blank'
									ariaLabel='Instagram'
									title='Instagram'
								>
									<img src='./icons/instagram.svg' alt='' />
								</AppLink>
							</li>
							<li className='soc1als__item'>
								<AppLink
									to=''
									className='soc1als__link'
									target='_blank'
									ariaLabel='Facebook'
									title='Facebook'
								>
									<img src='./icons/facebook.svg' alt='' />
								</AppLink>
							</li>
							<li className='soc1als__item'>
								<AppLink
									to=''
									className='soc1als__link'
									target='_blank'
									ariaLabel='Twitter'
									title='Twitter'
								>
									<img src='./icons/twitter.svg' alt='' />
								</AppLink>
							</li>

							<li className='soc1als__item'>
								<AppLink
									to=''
									className='soc1als__link'
									target='_blank'
									ariaLabel='Telegram'
									title='Telegram'
								>
									<img src='./icons/telegram.svg' alt='' />
								</AppLink>
							</li>
							<li className='soc1als__item'>
								<AppLink
									to=''
									className='soc1als__link'
									target='_blank'
									ariaLabel='WhatsApp'
									title='WhatsApp'
								>
									<img src='./icons/whatsapp.svg' alt='' />
								</AppLink>
							</li>
							<li className='soc1als__item'>
								<AppLink
									to=''
									className='soc1als__link'
									target='_blank'
									ariaLabel='Tiktok'
									title='Tiktok'
								>
									<img src='./icons/tiktok.svg' alt='' />
								</AppLink>
							</li>
							<li className='soc1als__item'>
								<AppLink
									to=''
									className='soc1als__link'
									target='_blank'
									ariaLabel='Behance'
									title='Behance'
								>
									<img src='./icons/behance.svg' alt='' />
								</AppLink>
							</li>
							<li className='soc1als__item'>
								<AppLink
									to=''
									className='soc1als__link'
									target='_blank'
									ariaLabel='Pinterest'
									title='Pinterest'
								>
									<img src='./icons/pinterest.svg' alt='' />
								</AppLink>
							</li>
						</ul>
					</div>
					<p className='footer__copyright'>
						@ <time dateTime='2025'>2025</time> SMM.COM. All rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
