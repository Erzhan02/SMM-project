const Testimonials = () => {
	return (
		<section class='testimonials'>
			<div class='testimonials__main container'>
				<div class='testimonials__body wrapper'>
					<h2 class='testimonials__title'>ОТЗЫВЫ</h2>
					<div class='testimonials__content'>
						<div class='testimonials__content-box'>
							<button class='prev'>
								<img src='./icons/left-arrow.svg' alt='' />
							</button>
						</div>
						<div class='testimonials__content-box track'>
							<div class='testimonials__content-box carousel'>
								<img src='./images/kolya.png' alt='' />
								<div class='testimonials__text'>
									<h3>Николай</h3>
									<p>
										It is a long established fact that a reader will be
										distracted by the readable content of a page when looking at
										it layout.
									</p>
								</div>
							</div>
							<div class='testimonials__content-box carousel'>
								<img src='./images/kolya.png' alt='' />
								<div class='testimonials__text'>
									<h3>Николай</h3>
									<p>
										It is a long established fact that a reader will be
										distracted by the readable content of a page when looking at
										it layout.
									</p>
								</div>
							</div>
							<div class='testimonials__content-box carousel'>
								<img src='./images/kolya.png' alt='' />
								<div class='testimonials__text'>
									<h3>Николай</h3>
									<p>
										It is a long established fact that a reader will be
										distracted by the readable content of a page when looking at
										it layout.
									</p>
								</div>
							</div>
						</div>
						<div class='testimonials__content-box'>
							<button class='next'>
								<img src='./icons/right-arrow.svg' alt='' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
