$(".file-button").on("click", function() {
	console.log("click");
	$(".choices").toggleClass("shown");
});

$(".edit-button").on("click", function() {
	$(".options").toggleClass("shown");
});