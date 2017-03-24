// To create the background color corresponding to
// the input rgb values when clicked for change

 $("a#color-button").on(
	"click", function() {

		var r = $("input#red").val();
		var g = $("input#green").val();
		var b = $("input#blue").val();
		var rgbv = "rgb(" + r + "," + g + "," + b + ")";

		console.log(rgbv);

		$("div#wrapper").css("background-color", rgbv);
		}
	);


// To create a random background color every link click

/* $("a#color-button").on(
	"click", function() {

		var r = Math.floor (Math.random() * 255);
		var g = Math.floor (Math.random() * 255);
		var b = Math.floor (Math.random() * 255);
		var rgbv = "rgb(" + r + "," + g + "," + b + ")";

		console.log(rgbv);

		$("div#wrapper").css("background-color", rgbv);
		}
	);
	*/