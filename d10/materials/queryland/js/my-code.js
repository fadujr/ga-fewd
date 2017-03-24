var clickCount = 0;
var coolText = $("p.cool").text(); 
var awesomeText = $("p.awesome").text();


/* $("button").on(
	"click", function() {
		console.log("I WAZ CLICKED!");

		clickCount = clickCount + 1;

		console.log(clickCount);

		if (clickCount === 1)
		{
			$("p.cool").text("Button was clicked!");
		}
		else
		{
			$("p.cool").text(coolText);
		}
		
		if (clickCount === 2)
		{
			$("p.awesome").text("Woot the button was clicked for the second time!");
		}
		else
		{
			$("p.awesome").text(awesomeText);
		}
	}
);
*/

// write code such that
// when a user enters text in the input
// and presses the button
// then, that text appears as the h1 text




$("button").on(
	"click", function() {
			var iv = $("input").val();
			$("h1").text(iv);
		}
	);

