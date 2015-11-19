(function ($) {
  $(document).ready(function(){

  // hide .navbar first
  $(".navbar").hide();
  
  // fade in .navbar
  $(function () {
    $(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
            if ($(this).scrollTop() > 120) {
              $('.navbar').fadeIn();
            } else {
              $('.navbar').fadeOut();
            }
          });
  });
  // transition name change for home page link
  var originalText = $('#name').text();

  $('#name').mouseenter(function() {
    $(this).animate(
      {'opacity': 0}, 500, function () {
        $(this).text('Home');
      }).animate({'opacity': 1}, 500);
  });

  $('#name').mouseleave(function() {
    $(this).animate(
      {'opacity': 0}, 500, function () {
        $(this).text(originalText);
      }).animate({'opacity': 1}, 500);
  });

  //enabling vegas slider
  $(".intro-header").vegas({
<<<<<<< HEAD
      slides: [
          { src: "../img/turtle_IMG.jpg" },
          { src: "../img/hand_of_banana.jpg" },
          { src: "../img/morpion2.jpg" }
      ]
  });

  
=======
    slides: [
    { src: "../img/turtle_IMG.jpg" },
    { src: "../img/hand_of_banana.jpg" },
    { src: "../img/morpion2.jpg" }
    ]
  });

>>>>>>> 06b850221477ea649b2218a0a0aa89c6579bf98f
});
}(jQuery));