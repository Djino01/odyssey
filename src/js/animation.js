$(document).ready(function () {
	setTimeout(function(){
		$(".promo__title").removeClass("hidden");
	}, 100);
	setTimeout(function(){
		$(".promo__subtitle").removeClass("hidden");
	}, 200);
	setTimeout(function(){
		$(".promo__row").removeClass("hidden");
	}, 300);
	setTimeout(function(){
		$(".promo__buttons").removeClass("hidden");
	}, 400);
	setTimeout(function(){
		inView('.tops, .bottom, .left, .right').on('enter', function (event, isInView) {
			$(event).addClass('viev-active');
		});
	}, 100);
});
