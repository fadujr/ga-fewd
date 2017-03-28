$("click-me").on("click", function() {
	var age = $("#age").val();
	var max = $("#max-age").val();
	var day = $("#num-per-day").val();

	var dif = max.parseInt() - age.parseInt();  
	var sol = 365 * dif * day.parseInt();

	$("#solution").text(sol.toString());
	$("#drink").text($("#item option:selected").text());
});