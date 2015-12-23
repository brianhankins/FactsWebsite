//Hide spoliers
$(".spoiler span").hide();

//Add buttons
$(".spoiler").append("<button>Reveal Fact!</button>");

//When button pressed
$(".spoiler button").click(function(){
	//show spoiler
	$(this).prev().show();
	//remove button
	$(this).remove();
});

