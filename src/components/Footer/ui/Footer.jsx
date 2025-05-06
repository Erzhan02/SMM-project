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
						<button className='footer__form-button button' type='submit'>
							зарегистрироваться
						</button>
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
					<a
						className='footer__logo logo'
						href='/'
						aria-label='Home'
						title='Home'
					>
						smm.com
					</a>
					<div className='footer__soc1als soc1als'>
						<ul className='soc1als__list footer-icons'>
							<li className='soc1als__item'>
								<a
									href=''
									className='soc1als__link'
									target='_blank'
									aria-label='Instagram'
									title='Instagram'
								>
									<img src='./icons/instagram.svg' alt='' />
								</a>
							</li>
							<li className='soc1als__item'>
								<a
									href=''
									className='soc1als__link'
									target='_blank'
									aria-label='Facebook'
									title='Facebook'
								>
									<img src='./icons/facebook.svg' alt='' />
								</a>
							</li>
							<li className='soc1als__item'>
								<a
									href=''
									className='soc1als__link'
									target='_blank'
									aria-label='Twitter'
									title='Twitter'
								>
									<img src='./icons/twitter.svg' alt='' />
								</a>
							</li>

							<li className='soc1als__item'>
								<a
									href=''
									className='soc1als__link'
									target='_blank'
									aria-label='Telegram'
									title='Telegram'
								>
									<img src='./icons/telegram.svg' alt='' />
								</a>
							</li>
							<li className='soc1als__item'>
								<a
									href=''
									className='soc1als__link'
									target='_blank'
									aria-label='WhatsApp'
									title='WhatsApp'
								>
									<img src='./icons/whatsapp.svg' alt='' />
								</a>
							</li>
							<li className='soc1als__item'>
								<a
									href=''
									className='soc1als__link'
									target='_blank'
									aria-label='Tiktok'
									title='Tiktok'
								>
									<img src='./icons/tiktok.svg' alt='' />
								</a>
							</li>
							<li className='soc1als__item'>
								<a
									href=''
									className='soc1als__link'
									target='_blank'
									aria-label='Behance'
									title='Behance'
								>
									<img src='./icons/behance.svg' alt='' />
								</a>
							</li>
							<li className='soc1als__item'>
								<a
									href=''
									className='soc1als__link'
									target='_blank'
									aria-label='Pinterest'
									title='Pinterest'
								>
									<img src='./icons/pinterest.svg' alt='' />
								</a>
							</li>
						</ul>
					</div>
					<p className='footer__copyright'>
						@ <time datetime='2025'>2025</time> SMM.COM. All rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
