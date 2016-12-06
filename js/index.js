jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.cd-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
		    		$('.cd-header').addClass('is-visible');
		    	} else {
		    		$('.cd-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.cd-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}

	//open/close primary navigation
	$('.cd-primary-nav-trigger').on('click', function(){
		$('.cd-menu-icon').toggleClass('is-clicked'); 
		$('.cd-header').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
			$('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});


	//toggle room descriptions cards
	$('#js-flip-1').bind('click', function() {
    $('#js-flip-1 .card').toggleClass('flipped');
	});
	$('#js-flip-2').bind('click', function() {
    $('#js-flip-2 .card').toggleClass('flipped');
	});
	$('#js-flip-3').bind('click', function() {
    $('#js-flip-3 .card').toggleClass('flipped');
	});
	$('#js-flip-4').bind('click', function() {
    $('#js-flip-4 .card').toggleClass('flipped');
	});
	$('#js-flip-5').bind('click', function() {
    $('#js-flip-5 .card').toggleClass('flipped');
	});
	$('#js-flip-6').bind('click', function() {
    $('#js-flip-6 .card').toggleClass('flipped');
	});
	$('#js-flip-7').bind('click', function() {
    $('#js-flip-7 .card').toggleClass('flipped');
	});
	$('#js-flip-8').bind('click', function() {
    $('#js-flip-8 .card').toggleClass('flipped');
	});


	////// Initiate Lightgallery plugin //////
  $("#lightgallery").lightGallery({
    thumbnail: true,
    animateThumb: false,
    showThumbByDefault: false
  });
  
});