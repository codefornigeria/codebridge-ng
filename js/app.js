$(function() {
	$('.hamburger').click(function() {
        $('.mobile-nav').show(); 
        $('.logo').hide(); 
 	});

	$('.close-nav').click(function() {
        $('.mobile-nav').hide(); 
        $('.logo').fadeIn(); 
 	});
});