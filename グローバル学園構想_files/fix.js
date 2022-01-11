// JavaScript Document
var $win = $(window);
$win.on('load resize', function() {
  var windowWidth = $win.width();

  if (windowWidth > 1024) {
	var $header = $('header');
	// Nav Fixed
	$(window).scroll(function() {
		if ($(window).scrollTop() > 1400) {
			$header.addClass('fixed');
		} else {
			$header.removeClass('fixed');
		}
	});
	// Nav Toggle Button
	$('#nav-toggle').click(function(){
		$header.toggleClass('open2');
	});
  }
});
