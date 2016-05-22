var prev = 0;
$(window).scroll(function() {
  var header = $('.header');
  var scrollTop = $(this).scrollTop();
  header.toggleClass('hidden', scrollTop > prev);
  console.log(scrollTop);
  prev = scrollTop;
});
