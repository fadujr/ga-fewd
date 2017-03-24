var cg = 0;
var ig= 0;

$("button").on("click", function() 
{
	var answer = Math.floor(Math.random()) * 10; 

	if ($("input").val() === answer)
	{
		cg = cg + 1;
		$("p#correct").text(cg.toString());
	}
	else 
	{
		ig = ig + 1;
		$("p#incorrect").text(ig.toString());
	}
});
