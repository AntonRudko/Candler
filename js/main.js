const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
	menuMobile.classList.toggle('menu--open');
});

const swiperOne = new Swiper('.feedback__slider', {
	navigation: { nextEl: '.swiper-button-right' },
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
});

const swiperTwo = new Swiper('.certificates__slider', {
	// navigation: { nextEl: '.swiper-button-right' },
	loop: true,
	slidesPerView: 3,
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
	},
	breakpoints: {
		640: {
			slidesPerView: 3,
		},
		480: {
			slidesPerView: 2,
		},
		360: {
			slidesPerView: 1,
		},
	},
});

const questions__list = document.querySelector('.questions__list');
const question__titles = questions__list.querySelectorAll('.question__title');

question__titles.forEach.call(question__titles, function (question__title) {
	question__title.addEventListener('click', function () {
		const currentText = question__title.parentElement.querySelector('.question__answear');
		question__title.classList.toggle('question__title-active');
		currentText.classList.toggle('question__answear-wisible');
		if (currentText.classList.contains('question__answear-wisible')) {
			currentText.style.maxHeight = currentText.scrollHeight + 'px';
		} else {
			currentText.style.maxHeight = null;
		}
	});
});
