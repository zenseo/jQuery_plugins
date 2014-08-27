;(function(){
	$.fn.backTop = function(opts) {
		var options = $.extend({
			minHeight: 1,
			speed: 200
		}, opts);

		var $ele = $(this);
		$(window).scroll(function(){
			if ($(window).scrollTop() >= options.minHeight) {
				$ele.show('slow');
			} else {
				$ele.hide('slow');
			}
		});
		$ele.click(function(){
			$('html,body').animate({
				scrollTop: 0
			}, options.speed);
		})
	}
})(jQuery)