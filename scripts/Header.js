const selectors = {
	root: '[data-js-header]',
	overlay: '[data-js-header-overlay]',
	burgerButton: '[data-js-header-burger-button]',
};

const stateClasses = {
	isActive: 'is-active',
	isLock: 'is-lock',
};

function initHeader() {
	const rootElement = document.querySelector(selectors.root);
	if (!rootElement) return;

	const overlayElement = rootElement.querySelector(selectors.overlay);
	const burgerButtonElement = rootElement.querySelector(selectors.burgerButton);

	if (!overlayElement || !burgerButtonElement) return;

	function onBurgerButtonClick() {
		burgerButtonElement.classList.toggle(stateClasses.isActive);
		overlayElement.classList.toggle(stateClasses.isActive);
		document.documentElement.classList.toggle(stateClasses.isActive);
	}

	burgerButtonElement.addEventListener('click', onBurgerButtonClick);
}

export default initHeader;
