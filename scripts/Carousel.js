// let position = 0;
// const slidesToShow = 3;
// const slidesToScroll = 1;

// const container = document.querySelector('.track-wrapper');
// const track = document.querySelector('.track');
// const items = Array.from(document.querySelectorAll('.carousel'));
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// const itemWidth = container.clientWidth / slidesToShow;
// const movePosition = itemWidth * slidesToScroll;

// items.forEach(item => {
// 	item.style.minWidth = `${100 / slidesToShow}%`;
// });

// prevBtn.addEventListener('click', () => moveSlide('prev'));
// nextBtn.addEventListener('click', () => moveSlide('next'));

// function moveSlide(direction) {
// 	const maxScroll = (items.length - slidesToShow) * itemWidth;

// 	if (direction === 'next') {
// 		const remainingScroll = maxScroll + position;
// 		position -=
// 			remainingScroll >= movePosition ? movePosition : remainingScroll;
// 	} else {
// 		position += movePosition;
// 	}

// 	position = Math.max(Math.min(position, 0), -maxScroll);
// 	updateSlider();
// }

// function updateSlider() {
// 	track.style.transform = `translateX(${position}px)`;
// 	prevBtn.disabled = position === 0;
// 	nextBtn.disabled = position <= -(items.length - slidesToShow) * itemWidth;
// }

// updateSlider();

// export default moveSlide;

// let position = 0;
// const slidesToShow = 3;
// const slidesToScroll = 1;

// const container = document.querySelector('.testimonials__content');
// const track = document.querySelector('.track');
// const items = document.querySelectorAll('.carousel');
// const itemsCount = items.length;
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// const itemWidth = container.clientWidth / slidesToShow;
// const movePosition = slidesToScroll * itemWidth;

// items.forEach(item => {
// 	item.style.minWidth = '33.333%';
// });

// prevBtn.addEventListener('click', () => {
// 	const itemsLeft = Math.abs(position) / itemWidth;
// 	position +=
// 		itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

// 	setPosition();
// 	checkBtns();
// });

// nextBtn.addEventListener('click', () => {
// 	const itemsLeft =
// 		itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

// 	position -=
// 		itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

// 	setPosition();
// 	checkBtns();
// });

// const setPosition = () => {
// 	track.style.transform = `translateX(${position}px)`;
// };

// const checkBtns = () => {
// 	prevBtn.disabled = position === 0;
// 	nextBtn.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
// };

// checkBtns;

// export default Carousel;
