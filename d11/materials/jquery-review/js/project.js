var r = Math.floor (Math.random() * 255);
var g = Math.floor (Math.random() * 255);
var b = Math.floor (Math.random() * 255);
var rgbv = "rgb(" + r + "," + g + "," + b + ")";


$("article").css("background-color", rgbv);

$("article").text("These are mood ring boxes.");

$("article.first").on("click", function()
	{
		$("article.first").toggleClass("bigger");
	});

$("article.second").on("click", function()
	{
		$("article.second").toggleClass("bigger");
	});
