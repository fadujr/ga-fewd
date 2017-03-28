
$("button").on("click", function()
{
	if ($("select").val("deg-f"))
	{	
		var c = $("input").val();
		var f = 1.8 * parseInt(c) + 32;
		$("span").text(f.toString());
	}
	if ($("select").val("deg-c"))
	{
		var f = $("input").val();
		var c = 0.5555 * (parseInt(f) - 32);
		$("span").text(c.toString());
		$("p").text("That is equal to degrees Celsius");
	}
});