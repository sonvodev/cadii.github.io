(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 Feature Product Carousel
------------------------------ */  
  $(".total-product").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [993,3],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
  }); 
/*----------------------------
 Product testimonial Carousel
------------------------------ */  
  $(".total-product-testimonial").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 1,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [993,1],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
  }); 
/*----------------------------
New Arival Product Carousel
------------------------------ */  
  $(".total-new-arival").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 3,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,2],
	  itemsDesktopSmall : [993,2],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
  }); 
/*----------------------------
Testimonial Carousel
------------------------------ */  
  $(".testimonial").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:true,	  
      items : 1,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [993,1],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
  });
/*----------------------------
Home Three Carousel
------------------------------ */  
  $(".new-arival-slider , .blog-slider").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 1,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [993,1],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
  });
/*----------------------------
Team Slider
------------------------------ */  
  $(".team-slider").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 1,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [993,1],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
  });

/*----------------------------
 price-slider active
------------------------------ */  
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - $" + $( "#slider-range" ).slider( "values", 1 ) );    
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
/*-------------------------------------
Sidemenu Activation
---------------------------------------*/     

	$('.header-two .icon a').on('click',function(){
	  $('.side-menu').addClass( "show-box" );
	});
	$('.close').on('click',function(){
	   $('.side-menu').removeClass( "show-box" );
	});
	/*---------------------
	countdown
	--------------------- */
    var d = new Date();
    d.setDate(d.getDate() + 450);

    // default example
    simplyCountdown('.simply-countdown-one', {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate()
    });
    /*-------------------------------
    Counter Up
    ---------------------------------*/
	$('.about-counter').counterUp({
		delay: 50,
		time: 3000
	});
	/*----------------------------
	testimonial-car
	------------------------------ */  
	  jQuery(".related-product").owlCarousel({
	      autoPlay: true, 
		  slideSpeed:2000,
		  pagination:false,
		  navigation:true,	  
	      items : 3,
		  /* transitionStyle : "fade", */    /* [This code for animation ] */
		  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	      itemsDesktop : [1199,3],
		  itemsDesktopSmall : [980,2],
		  itemsTablet: [768,1],
		  itemsMobile : [479,1],
	  });	  
 
})(jQuery); 