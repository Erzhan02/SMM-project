import AppSection from '@/shared/ui/AppSection/ui/AppSection';
import bulb from '@i/bulb.svg';
import clock from '@i/clock.svg';
import community from '@i/community.svg';
import cup from '@i/cup.svg';
import document from '@i/document.svg';
import gallery from '@i/gallery.svg';
import { programOfCourse } from './data';

const icons = [clock, cup, bulb, document, gallery, community];

const Program = () => {
	return (
		<AppSection className='program'>
			<div className='program__main container'>
				<div className='program__body'>
					<h2 className='program__title'>ПРОГРАММА КУРСА</h2>
					<div className='program__content'>
						{programOfCourse.map((item, index) => (
							<div key={index} className='program__content-box'>
								<div className='program__description'>
									<div className='program__description-number'>{index + 1}</div>
									<div className='program__description-text'>
										<h3>{item.title}</h3>
										{item.descriptions.map((text, i) => (
											<p key={i}>- {text}</p>
										))}
									</div>
								</div>
								{index % 2 === 0 && icons[Math.floor(index / 2)] && (
									<img
										src={icons[Math.floor(index / 2)]}
										alt=''
										className='program__icon'
									/>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</AppSection>
	);
};

export default Program;
