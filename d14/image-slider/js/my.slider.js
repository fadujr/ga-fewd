var slider1 = new IdealImageSlider.Slider({
	selector: '#slider1', 
	interval: 2400
});

var slider2 = new IdealImageSlider.Slider({
	selector: '#slider2',
	height: 400, // Required but can be set by CSS
	interval: 1000,
	effect: 'fade'
});

slider1.addBulletNav();
slider2.addCaptions();

slider1.start();
slider2.start();

