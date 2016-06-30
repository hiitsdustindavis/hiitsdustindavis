$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 79
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

var prev = 0;
$(window).scroll(function() {
  var header = $('.header');
  var scrollTop = $(this).scrollTop();
  header.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;

  var $picacause = $('#picacause');
  var $windowOfPerception = $('#window');
  var $benefit = $('#benefit'); 
  var $collab = $('#collab');
  if (($windowOfPerception.offset().top + $windowOfPerception.height()) < scrollTop + 80) {
    $('#projects-nav-window').css({
      'background-color' : "white"
    });
  } else if ($windowOfPerception.offset().top < scrollTop + 80){
    $('#projects-nav-window').css({
      'background-color' : "yellow"
    });
  } else {
    $('#projects-nav-window').css({
      'background-color' : "white"
    });
  }

  if (($picacause.offset().top + $picacause.height()) < scrollTop + 80) {
    $('#projects-nav-picacause').css({
      'background-color' : "white"
    });
  } else if ($picacause.offset().top < scrollTop + 80){
    $('#projects-nav-picacause').css({
      'background-color' : "yellow"
    });
  } else {
    $('#projects-nav-picacause').css({
      'background-color' : "white"
    });
  }

  if (($benefit.offset().top + $benefit.height()) < scrollTop + 80) {
    $('#projects-nav-benefit').css({
      'background-color' : "white"
    });
  } else if ($benefit.offset().top < scrollTop + 80){
    $('#projects-nav-benefit').css({
      'background-color' : "yellow"
    });
  } else {
    $('#projects-nav-benefit').css({
      'background-color' : "white"
    });
  }

  if (($collab.offset().top + $collab.height()) < scrollTop + 80) {
    $('#projects-nav-collab').css({
      'background-color' : "white"
    });
  } else if ($collab.offset().top < scrollTop + 80){
    $('#projects-nav-collab').css({
      'background-color' : "yellow"
    });
  } else {
    $('#projects-nav-collab').css({
      'background-color' : "white"
    });
  }
  // console.log(scrollTop + $('.picacause').height());
  // console.log(scrollTop);

});
