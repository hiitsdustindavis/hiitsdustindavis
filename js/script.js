// $(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

			projects.animate({opacity: '0'},500);

			setTimeout(function(){
		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top - 79
		    }, 10, 'swing', function () {
		        window.location.hash = target;
		    });
			}, 500);
			projects.animate({opacity: '1'},500);

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

	// $projNav.click(function() {
	// 	var target = this.hash;
  //   var $target = $(target);
	// 	event.preventDefault();
	// 	projects.animate({opacity: '0'},500);
	// 	$('html, body').stop().animate({
	// 	        'scrollTop': $target.offset().top - 79
	// 	    }, 900, 'swing', function () {
	// 	        window.location.hash = target;
	// 	    });
	// 	projects.animate({opacity: '1'},500);
	// })

// Hide Header on Scroll
$(window).scroll(function() {
	scrollTop = $(window).scrollTop();
  header.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
	projNavHighLight();
});



var projNavHighLight = function() {
	var pos = 0;

	while (pos < maxCount) {
		var tempProj = $proj.eq(pos);
		var tempNav = $projNav.eq(pos);

		if ((tempProj.offset().top + tempProj.height()) < scrollTop + 80) {
			// This is the bottom offset of the project is less than 80px
			tempNav.css({
	      'background-color' : "white"
	    });
		} else if (tempProj.offset().top < scrollTop + 80){
			// This is when the top of the project is less that 80px
	    tempNav.css({
	      'background-color' : "yellow"
	    });
	  } else {
	    tempNav.css({
	      'background-color' : "white"
	    });
	  }
		pos++;
	}
};
// });
