$(document).ready(function(){
  var animationTop = $(".cactus").offset().top;
  if (window.height() < animationTop) {
    $(".cactus").addClass("is-hidden");
  }
});
