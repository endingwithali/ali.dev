<!-- This is the javascript for the navigation images -->
$('.fadeNav').css("opacity","1.0"); //set initial opacity
$('.fadeNav').hover(function() {
	$(this).stop().animate({ opacity: 0.50 });}, //on mouse hover 
	function() {
	$(this).stop().animate({ opacity: 1.0 }); //on mouse out
});
