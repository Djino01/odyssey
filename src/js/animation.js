$(document).ready(function () {
	setTimeout(function(){
		inView('.bottom, .left, .right').on('enter', function (event, isInView) {
			$(event).addClass('viev-active');
		});
	}, 100);
});
