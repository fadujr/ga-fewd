// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

$("#first").on("click", function() {
	$("figure img").attr("src", "img/1.jpg");
});

$("#second").on("click", function() {
	$("figure img").attr("src", "img/2.jpg");
});

$("#third").on("click", function() {
	$("figure img").attr("src", "img/3.jpg");
});

$("#fourth").on("click", function() {
	$("figure img").attr("src", "img/4.jpg");
});