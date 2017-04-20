
var searchHistory = [];

var getNewInfo = function(movie){
	$.getJSON("http://omdbapi.com?t=" + movie, function(data){
		var liThatIMade = $("<li></li>");

		console.log(data);
		$(".title").text(data["Title"]);
		$(".poster").attr("src", data["Poster"]);
		$(".year").text(data["Year"]);
		$(".plot").text(data["Plot"]);
		liThatIMade = $(liThatIMade).text(data["Title"]);
		$(".search-history").append(liThatIMade);	

		var stashedMovie = {
			title: data["Title"], 
			rtScore: data["Ratings"][1]["Value"],
			rating: data["Rated"]
		}

		searchHistory.push(stashedMovie);
	});
};

var checkOldInfo = function(movie){
	$.getJSON("http://omdbapi.com?t=" + movie, function(data){
		console.log(data);
		$(".title").text(data["Title"]);
		$(".poster").attr("src", data["Poster"]);
		$(".year").text(data["Year"]);
		$(".plot").text(data["Plot"]);
	});
};

$(".search").on("click", function(){
	var movie = $("input").val();	
	getNewInfo(movie); 	
	console.log(searchHistory);
});


$("ul").on("click", function(event){
	var item = $(event.target).text();
	checkOldInfo(item);
});

// if the Rotten Tomatoes rating is less than 50%, remove the movie from list

/*$(".filter").on("click", function(){
	$("ul").children().remove();
	var index = 0;

	while (index < searchHistory.length)
	{
		var scoreAsInt = parseInt(searchHistory[index]["rtScore"]);
		if (scoreAsInt > 50)
		{
			var li = $("<li>" + searchHistory[index]["title"] + "</li>");
			$(".search-history").append(li);
		}
		index = index + 1;
	}
});
*/
$(".filter").on("click", function(){
	$("ul").children().remove();

	searchHistory.forEach(function(aSingleMovie){
		var scoreAsInt = parseInt(aSingleMovie["rtScore"]);
		if (scoreAsInt > 50)
		{
			var li = $("<li>" + aSingleMovie["title"] + "</li>");
			$(".search-history").append(li);
		}
	});
});

$(".unfilter").on("click", function(){
	$("ul").children().remove();

	searchHistory.forEach(function(movies){
		var li = $("<li>" + movies["title"] + "</li>");
		$(".search-history").append(li);
	});
	console.log()
});

$(".good").click(function(){
	if($(this).is(":checked"))
	{
		$("ul").children().remove();

		searchHistory.forEach(function(aSingleMovie){
			var scoreAsInt = parseInt(aSingleMovie["rtScore"]);
			if (scoreAsInt > 50)
			{
				var li = $("<li>" + aSingleMovie["title"] + "</li>");
				$(".search-history").append(li);
			}
		});
	}
	else
	{
		$("ul").children().remove();

		searchHistory.forEach(function(movies){
			var li = $("<li>" + movies["title"] + "</li>");
			$(".search-history").append(li);
		});
	}
});

$(".rated-r").click(function(){
	if($(this).is(":checked"))
	{
		$("ul").children().remove();

		searchHistory.forEach(function(aSingleMovie){
			if (aSingleMovie["rating"] !== "R")
			{
				var li = $("<li>" + aSingleMovie["title"] + "</li>");
				$(".search-history").append(li);
			}
		});
	}
	else
	{
		$("ul").children().remove();

		searchHistory.forEach(function(movies){
			var li = $("<li>" + movies["title"] + "</li>");
			$(".search-history").append(li);
		});
	}
});

$(".good-and-classy").click(function(){
	if($(this).is(":checked"))
	{
		$("ul").children().remove();

		searchHistory.forEach(function(aSingleMovie){
			var scoreAsInt = parseInt(aSingleMovie["rtScore"]);
			if (scoreAsInt > 50 && aSingleMovie["rating"] !== "R")
			{
				var li = $("<li>" + aSingleMovie["title"] + "</li>");
				$(".search-history").append(li);
			}
		});
	}
	else
	{
		$("ul").children().remove();

		searchHistory.forEach(function(movies){
			var li = $("<li>" + movies["title"] + "</li>");
			$(".search-history").append(li);
		});
	}
});

/*var arrayAsString = JSON.stringify(searchHistory);
localStorage.setItem("titles", arrayAsString);

var arrayAsString = localStorage.getItem("titles");
var searchHistory = JSON.parse(arrayAsString);
searchHistory.forEach(function(title){
  // use this to "loop" through the titles
  	var x = 0;
  	if (title === searchHistory[x])
  	{
  		return searchHistory[x];
  	}
  	else
  	{
  		x = x + 1;
  		if(x === searchHistory.length() - 1)
  			return;
  	}
});
*/
