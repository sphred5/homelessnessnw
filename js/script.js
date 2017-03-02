window.addEventListener('load', function () {
	var mediaQuery = 700;

	var background = document.getElementById('bg');
	var backgroundCords = background.getBoundingClientRect();

	var sidebar = document.getElementById('sidebar');
	var sidebarCords = sidebar.getBoundingClientRect();

	var num = backgroundCords.height;
	window.addEventListener('scroll', function() {
		if(Math.max(window.innerWidth, document.documentElement.clientWidth) > mediaQuery) {
			background.style['top'] = '-' + Math.min(150, pageYOffset/(backgroundCords.height)*100) + 'px';
			sidebar.style['top'] =  '-' + Math.min(150, pageYOffset/(backgroundCords.height)*100) + 'px';
		} else {
			background.style['top'] = '0px';
			sidebar.style['top'] = '0px';
		}
	});
	
});
