$("button").on("click", function()
{
	var c = $("input").val();
	var f = 1.8 * parseInt(c) + 32;

	$("span").text(f.toString());
});