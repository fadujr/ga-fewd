var isFilled = false;
var isX = false;
var isO = false;

$(".board * div").on("click", function(){
	if (isFilled === false)
	isFilled = true;
});