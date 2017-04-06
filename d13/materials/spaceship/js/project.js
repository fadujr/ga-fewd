$("document").keydown(function(e) {
	if (e.which === 37)
	{
		alert("left pressed");
		e.preventDefault();
	}
	if (e.which === 38)
	{
		alert("up pressed");
		e.preventDefault();
	}
	if (e.which === 39)
	{
		alert("right pressed");
		e.preventDefault();
	}
	if (e.which === 40)
	{
		alert("down pressed");
		e.preventDefault();
	}
});
