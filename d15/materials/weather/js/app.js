$("button").on("click", function(){
	var city = $("input").val();

	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=946fcd0aedbb37e4bbb48390601a0593", function(data){
		console.log(data);
		$(".temperature").text(data["main"]["temp"]);
		$(".icon").attr("src", "http://openweathermap.org/img/w/" + data["weather"][0]["icon"] + ".png");


	});	

	$.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=946fcd0aedbb37e4bbb48390601a0593", function(fc){
		console.log(fc);
		$(".forecast").text(fc["list"][0]["main"]["temp"]);
		$(".24icon").attr("src", "http://openweathermap.org/img/w/" + fc["list"][0]["weather"][0]["icon"] + ".png");
	});
});

