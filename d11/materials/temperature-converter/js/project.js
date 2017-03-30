
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
		var c = (parseInt(f) - 32)/1.8;
		var text = $("span").text(c.toString());
		$("p").text("That is equal to " + text + " degrees Celsius");
	}
});