import AppSection from '@/shared/ui/AppSection/ui/AppSection';

const Team = () => {
	return (
		<AppSection className='team'>
			<div className='team__main container'>
				<div className='team__body'>
					<h2 className='team__title'>НАШИ КУРАТОРЫ</h2>
					<div className='team__content'>
						<div className='team__content-box grid__item-1'>
							<img src='./images/kolya.png' alt='' loading='lazy' />
							<h3>Николай</h3>
							<p>
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
							</p>
						</div>
						<div className='team__content-box grid__item-2'>
							<img src='./images/kolya.png' alt='' loading='lazy' />
							<h3>Николай</h3>
							<p>
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
							</p>
						</div>
						<div className='team__content-box grid__item-3'>
							<img src='./images/kolya.png' alt='' loading='lazy' />
							<h3>Николай</h3>
							<p>
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
							</p>
						</div>
					</div>
				</div>
			</div>
		</AppSection>
	);
};

export default Team;
