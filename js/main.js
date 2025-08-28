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
