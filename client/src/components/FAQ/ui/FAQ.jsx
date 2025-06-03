import AppButton from '@/shared/ui/AppButton/ui/AppButton';
import AppSection from '@/shared/ui/AppSection/ui/AppSection';

const FAQ = () => {
	return (
		<AppSection className='faq'>
			<div className='faq__main container'>
				<div className='faq__body'>
					<h2 className='faq__title'>ЧЕМУ ВЫ НАУЧИТЕСЬ</h2>
					<div className='faq__content'>
						<div className='faq__content-box'>
							<h3>It is a long established fact that.?</h3>
							<p>
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using 'Content
								here, content here', making it look like readable English.
							</p>
							<AppButton className='faq__question-icon'>
								<img src='./icons/question.svg' alt='' />
							</AppButton>
						</div>
						<div className='faq__content-box'>
							<h3>It is a long established fact that.?</h3>
							<p>
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using 'Content
								here, content here', making it look like readable English.
							</p>
							<AppButton className='faq__question-icon'>
								<img src='./icons/question.svg' alt='' />
							</AppButton>
						</div>
						<div className='faq__content-box'>
							<h3>It is a long established fact that.?</h3>
							<p>
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using 'Content
								here, content here', making it look like readable English.
							</p>
							<AppButton className='faq__question-icon'>
								<img src='./icons/question.svg' alt='' />
							</AppButton>
						</div>
					</div>
				</div>
			</div>
		</AppSection>
	);
};

export default FAQ;
