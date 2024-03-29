$(document).ready(function() {
    /*STICKY NAV*/       
    $('.js--section-features').waypoint(function(direction) {
      if (direction == "down") {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
}, { 
        offset: '60px;'})

});

/*BUTTONS SCROLL*/
$('.js--scroll-to-plans').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},
    1000);
});

$('.js--scroll-to-start').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top},
    1000);
});

/*NAV SCROLL*/

$(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

/*--------------------------MOBILE NAVI------------------*/

$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    
    nav.slideToggle(200);
    });

