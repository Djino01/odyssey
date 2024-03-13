$(document).ready(function () {
	setTimeout(function(){
		inView('.tops, .bottom, .left, .right').on('enter', function (event, isInView) {
			$(event).addClass('viev-active');
		}).on('exit', function (event, isInView) {
			$(event).removeClass('viev-active');
		});
	}, 100);
});
