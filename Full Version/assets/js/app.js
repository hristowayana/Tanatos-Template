//Canvas Menu
(function() {
  'use strict';
  	$('.full-screen-menu').click(function (event) {
	    event.preventDefault();
	      	if ($(this).hasClass('active')){
	          	$(this).removeClass('active');
	          	$('.menu-overlay').fadeToggle( 'fast', 'linear' );
	          	$('.menu .menu-list').slideToggle( 'fast', 'swing' );
	          	$('.full-screen-menu-wrapper').toggleClass('bounce-effect');
	      	} 
	      	else {
	          	$(this).addClass('active');
	          	$('.menu-overlay').fadeToggle( 'fast', 'linear' );
	          	$('.menu .menu-list').slideToggle( 'slow', 'swing' );
	          	$('.full-screen-menu-wrapper').toggleClass('bounce-effect');
	      	}
	})
})();

;(function($ , window , document) {
	var $doc = $( document );
	var $win = $( window );

	$doc.ready( function() {
		var $main_slider = $( '#main-slider' );
		var $client_says = $( '#client-says' );
		var $our_team = $( '#our-team' );


		// Header Slider 
		$main_slider.owlCarousel({
		    loop: true,
		    items: 1,
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplaySpeed: 1000,
		    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		    // margin:10,
		    nav: true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});

		// Client Says Slider
		$client_says.owlCarousel({

		    loop: true,
		    dots: true,
		    items: 1,
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplaySpeed: 1000,
		    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		    // margin:10,
		    nav: true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});

		//Our Team Slider 
		$our_team.owlCarousel({

		    loop: true,
		    dots: true,
		    items: 1,
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplaySpeed: 1000,
		    autoplayHoverPause: true,

		    nav:false,
		    responsive:{
		        0:{
		            items:1
		        },
		        465:{
		        	items:2
		        },
		        500:{
		        	items:2
		        },
		        600:{
		            items:2
		        },
		        700:{
		        	items:3
		        },
		        800:{
		        	items:3
		        },
		        900:{
		        	items:3
		        },
		        1145:{
		            items:4
		        }
		    }
		});
	});

}) (jQuery, window, document);








