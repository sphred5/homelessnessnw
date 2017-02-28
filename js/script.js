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

	var cards = $('.card');
	cards.css({
		position: 'relative',
		opacity: '0',
		top: '100px'
	});

	cards.each(function(index, el) {
		console.log($(this));
		$(this).delay(index*100).animate({
			top: 0,
			opacity: 1}, 200);
	});
	

});
	