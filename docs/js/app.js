$(document).ready(function() {

    $('.header__burger').click(function () {
		$('.top-menu').addClass('active');
		$('body').addClass('fixed-mb');
	});
    $('.top-menu__close').click(function () {
		$('.top-menu').removeClass('active');
		$('body').removeClass('fixed-mb');
	});
	// Index page tabs
	$('.page-top__buttons').on('click', '.page-top__btn:not(.active)', function (e) {
		$(this)
			.addClass('active').siblings().removeClass('active');
			$('.index-page__content').hide().removeClass('active')
			.eq($(this).index()).fadeIn(100).addClass('active');

	});

	// Tabs
	$('.tabs__caption').on('click', '.tabs__btn:not(.active)', function (e) {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.tabs').find('.tabs__content').hide().removeClass('active')
			.eq($(this).index()).fadeIn(100).addClass('active');

	});

	// Scroll UP
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('.button-up').addClass('scroll');
		} else {
			$('.button-up').removeClass('scroll');
		}
	});
	$('.button-up').click(function(){
		$('body,html').animate({
		scrollTop: 0
		}, 500);
		return false;
	});

	// Scale
	$('.scale__bar').each(function() {
		let grade = $( this ).data("grade");
		let width = (grade.toFixed(1)) / 5 * 100 + '%';
		console.log(width);
		$( this ).css('width', width);
	  });

	// Custom range
	  $(".range-slider-js").ionRangeSlider({
		skin: "round",
        min: 0,
        max: 100,
        from: 40,
		postfix: " м<sup>2</sup>",
		hide_min_max: true,
    });

	// Modal
	const link = ".modal-js";
	$(link).fancybox({
		arrows: false,
		infobar: false,
		touch: false,
		type: 'inline',
		autoFocus: false,
		i18n: {
			en: {
				CLOSE: "Закрыть",
				NEXT: "Вперед",
				PREV: "Назад" 

			}
		}
	});
	$(".modal-close-js").click(function () {
		$.fancybox.close();
	});
	$.fancybox.defaults.backFocus = false;
})