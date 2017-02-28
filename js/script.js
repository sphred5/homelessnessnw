window.addEventListener('load', function () {
	var background = document.getElementById('bg');
	var backgroundCords = background.getBoundingClientRect();
	
	var sidebar = document.getElementById('sidebar');
	var sidebarCords = sidebar.getBoundingClientRect();

	var num = backgroundCords.height;
	window.addEventListener('scroll', function() {
		background.style['top'] = '-' + Math.min(200, pageYOffset/(backgroundCords.height)*100) + 'px';
	
		sidebar.style['top'] =  '-' + Math.min(200, pageYOffset/(backgroundCords.height)*100) + 'px';
	});

});
	