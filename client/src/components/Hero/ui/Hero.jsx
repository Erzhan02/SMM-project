import AppButton from '@/shared/ui/AppButton/ui/AppButton';
import AppSection from '@/shared/ui/AppSection/ui/AppSection';

const Hero = () => {
	return (
		<AppSection className='hero'>
			<div className='hero__main container'>
				<div className='hero__body'>
					<h2 className='hero__title'>
						SMM-вояж: путешествие от "хз что делать" до "я знаю всё о соцсетях!"
					</h2>
					<div className='hero__description'>
						<p>
							Наш курс даст тебе инсайдерские знания, практические навыки и долю
							вдохновения, чтобы ты стал настоящим гуру соцмедиа. Разжигай огонь
							страсти и погрузись в этот эпический SMM-мир
						</p>
					</div>
					<AppButton className='hero__button'>ХОЧУ НА КУРС</AppButton>
				</div>
				<div className='hero__image-wrapper'>
					<img
						className='hero__image'
						src='./images/man.png'
						alt=''
						loading='lazy'
					/>
				</div>
			</div>
		</AppSection>
	);
};

export default Hero;
