$(document).ready(function () {
	setTimeout(function(){
		inView('.bottom').on('enter', function (event, isInView) {
			$(event).addClass('viev-active');
		});
	}, 100);
});
