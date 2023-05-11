$(document).ready(function() {

    $('.header__burger').click(function () {
		$('.top-menu').addClass('active');
		$('body').addClass('fixed-mb');
	});
    $('.top-menu__close').click(function () {
		$('.top-menu').removeClass('active');
		$('body').removeClass('fixed-mb');
	});

	// Tabs
	$('.tabs__caption').on('click', '.tabs__btn:not(.active)', function (e) {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.tabs').find('.tabs__content').hide().removeClass('active')
			.eq($(this).index()).fadeIn(100).addClass('active');

	});

})