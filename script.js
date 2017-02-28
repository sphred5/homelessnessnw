window.addEventListener('load', function () {
	var background = document.getElementById('bg');
	var backgroundCords = background.getBoundingClientRect();
	
	var num = backgroundCords.height;
	window.addEventListener('scroll', function() {
		background.style['top'] = '-' + (pageYOffset/(num)*100) + 'px';
	});

});
	