window.addEventListener('load', function () {
	var mediaQuery = 700;

	if(Math.max(window.innerWidth, document.documentElement.clientWidth) > mediaQuery) {
		var background = document.getElementById('bg');
		var backgroundCords = background.getBoundingClientRect();
		
		var sidebar = document.getElementById('sidebar');
		var sidebarCords = sidebar.getBoundingClientRect();

		var num = backgroundCords.height;
		window.addEventListener('scroll', function() {
			background.style['top'] = '-' + Math.min(200, pageYOffset/(backgroundCords.height)*100) + 'px';
		
			sidebar.style['top'] =  '-' + Math.min(200, pageYOffset/(backgroundCords.height)*100) + 'px';
		});
	}

	// var cards = document.querySelectorAll('.card');

	// for (var i = 0; i < cards.length; i++) {
		
	// 	card.style.top = '100px';
	// 	card.style.opacity = 0;

	// 	setTimeout(function() {
	// 		animate(card, 'top', '0px');
	// 		animate(card, 'opacity', '1');
	// 	});
		
	// }
	var cards = $('.card');
	cards.css({
		position: 'relative',
		opacity: '0',
		top: '100px'
	});

	cards.each(function(index, el) {
		// console.log($(this));
		$(this).delay(index*200).animate({
			top: 0,
			opacity: 1}, 400);
	});
	

});
	