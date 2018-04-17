// $(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

			projects.animate({opacity: '0'},600);

			setTimeout(function(){
		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 1, 'swing', function () {
		        window.location.hash = target;
		    });
			}, 600);

			projects.animate({opacity: '1'},800);

	});


var prev = 0;
var $proj = $('.desktop-mock');
var $projNav = $('.proj-nav-each');
var maxCount = $proj.length;
var scrollTop = $(window).scrollTop();
var header = $('.header');
var projects = $('.projects');
var target = this.hash;
//     var $target = $(target);

// Fade to project


// Hide Header on Scroll
$(window).scroll(function() {
	scrollTop = $(window).scrollTop();
  // header.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
	projNavHighLight();
});



function projNavHighLight() {
	var pos = 0;

	while (pos < maxCount) {
		var tempProj = $proj.eq(pos);
		var tempNav = $projNav.eq(pos);

		if ((tempProj.offset().top + tempProj.height()) < scrollTop + 80) {
			//Default
			tempNav.removeClass('active');
			// tempNav.animate({background:'red'}, 300);
		} else if (tempProj.offset().top < scrollTop + 80){
			//When scroll exceeds height of header
			tempNav.addClass('active');
			// tempNav.animate({background:'#F8E71C'}, 300);
			//Remove class from other nav elements
	  } else {
			tempNav.removeClass('active');
			// tempNav.animate({background:'blue'}, 300);
	  }
		pos++;
	}
};
// });
