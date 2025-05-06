const Hero = () => {
	return (
		<section class='hero'>
			<div class='hero__main container'>
				<div class='hero__body'>
					<h2 class='hero__title'>
						SMM-вояж: путешествие от "хз что делать" до "я знаю всё о соцсетях!"
					</h2>
					<div class='hero__description'>
						<p>
							Наш курс даст тебе инсайдерские знания, практические навыки и долю
							вдохновения, чтобы ты стал настоящим гуру соцмедиа. Разжигай огонь
							страсти и погрузись в этот эпический SMM-мир
						</p>
					</div>
					<button class='hero__button button'>ХОЧУ НА КУРС</button>
				</div>
				<div class='hero__image-wrapper'>
					<img
						class='hero__image'
						src='./images/man.png'
						alt=''
						loading='lazy'
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
