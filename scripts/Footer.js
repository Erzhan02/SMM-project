function initResponsiveElements() {
	const BREAKPOINT = 767.98;

	const headerList = document.querySelector('.header-icons');
	const footerList = document.querySelector('.footer-icons');

	const footerImage = document.querySelector('.footer__image');
	const headerOverlay = document.querySelector('.header__overlay');
	const originalImageParent = footerImage?.parentElement;

	if (
		!headerList ||
		!footerList ||
		!footerImage ||
		!headerOverlay ||
		!originalImageParent
	) {
		return;
	}

	let resizeTimeout = null;

	function handleResize() {
		const width = window.innerWidth;

		const movedItems = headerList.querySelectorAll('[data-moved="true"]');
		movedItems.forEach(item => {
			item.removeAttribute('data-moved');
			footerList.appendChild(item);
		});

		if (!originalImageParent.contains(footerImage)) {
			originalImageParent.appendChild(footerImage);
		}

		if (width <= BREAKPOINT) {
			let moved = 0;
			while (moved < 5 && footerList.children.length > 0) {
				const lastItem = footerList.lastElementChild;
				if (lastItem) {
					lastItem.dataset.moved = 'true';
					headerList.prepend(lastItem);
					moved++;
				}
			}

			if (!headerOverlay.contains(footerImage)) {
				headerOverlay.appendChild(footerImage);
			}
		}
	}

	window.addEventListener('resize', () => {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(handleResize, 100);
	});

	handleResize();
}

export default initResponsiveElements;
