$(document).ready(function(){
  var container = document.querySelector('.gallery');
    var mixer = mixitup(container, {
      selectors:{
        control: '[m-control]'
      }
    });

    //owl-carousel
  $(".owl-carousel").owlCarousel({
  	autoplay: true,
		autoplayTimeout: 2000,
		smartSpeed: 300,
		loop: true,
		responsive:{
	    0:{
	        items:1
	       },
	    600:{
	        items:3
	       },
	    1000:{
	        items:5
	       }
	    }
  });
       // Animate
     
       $('.top').click(function(){
            $("html, body").animate({
                scrollTop: 0
            }, 2000);
       });

       $('.top').hide();


       $(window).scroll(function(){
            var ourWindow = $(this).scrollTop();

            if(ourWindow<100) {
                $('.top').fadeOut();
            } else {
                $('.top').fadeIn();
            }


         // Menu Fixed
        if(ourWindow>100) {
        	$('body').addClass('fixed');
        } else {
        	$('body').removeClass('fixed');
        }
       });


       $('.cus_nav li').click(function(){
			$(this).addClass('act').siblings().removeClass('act');
		});


       $('.cus_nav a[href^="#"]').click(function(e){
       		e.preventDefault();

       		var target = this.hash;

       		$('html, body').animate({
       			scrollTop: $(target).offset().top - 75
       		}, 500);

       });

       // WOW
       new WOW().init();

});