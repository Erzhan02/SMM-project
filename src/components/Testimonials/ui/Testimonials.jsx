import AppButton from '@/shared/ui/AppButton/ui/AppButton';
import AppSection from '@/shared/ui/AppSection/ui/AppSection';

const Testimonials = () => {
	return (
		<AppSection className='testimonials'>
			<div className='testimonials__main container'>
				<div className='testimonials__body wrapper'>
					<h2 className='testimonials__title'>ОТЗЫВЫ</h2>
					<div className='testimonials__content'>
						<div className='testimonials__content-box'>
							<AppButton className='prev'>
								<img src='./icons/left-arrow.svg' alt='' />
							</AppButton>
						</div>
						<div className='testimonials__content-box track'>
							<div className='testimonials__content-box carousel'>
								<img src='./images/kolya.png' alt='' />
								<div className='testimonials__text'>
									<h3>Николай</h3>
									<p>
										It is a long established fact that a reader will be
										distracted by the readable content of a page when looking at
										it layout.
									</p>
								</div>
							</div>
							<div className='testimonials__content-box carousel'>
								<img src='./images/kolya.png' alt='' />
								<div className='testimonials__text'>
									<h3>Николай</h3>
									<p>
										It is a long established fact that a reader will be
										distracted by the readable content of a page when looking at
										it layout.
									</p>
								</div>
							</div>
							<div className='testimonials__content-box carousel'>
								<img src='./images/kolya.png' alt='' />
								<div className='testimonials__text'>
									<h3>Николай</h3>
									<p>
										It is a long established fact that a reader will be
										distracted by the readable content of a page when looking at
										it layout.
									</p>
								</div>
							</div>
						</div>
						<div className='testimonials__content-box'>
							<AppButton className='next'>
								<img src='./icons/right-arrow.svg' alt='' />
							</AppButton>
						</div>
					</div>
				</div>
			</div>
		</AppSection>
	);
};

export default Testimonials;
