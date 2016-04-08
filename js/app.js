$(function() {
    $('.apply-btn').on("click", function() {
        $('.apply').show();
    });

    $(".contact-header").typed({
        strings: ["<b>Hello.^1000</b> How can we be of help ? "],
        contentType: 'html',
        typeSpeed: 30,
        backDelay: 750,
        showCursor: false,
        callback: function(){ 
        	$('.address').show();
        }
    });
 });   

