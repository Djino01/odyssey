$('.header__menu a, .footer__menu a, .promo-link').on("click", function () {
	$('body').removeClass('lock');
	$('.header__container').removeClass('active');
	var elementClick = $(this).attr("href")
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
	return false;
});

$('.header__burger').on("click", function (event) {
	$('body').addClass('lock');
	$('.header__container').addClass('active');
});

$('.header__closed').on("click", function (event) {
	$('body').removeClass('lock');
	$('.header__container').removeClass('active');
});