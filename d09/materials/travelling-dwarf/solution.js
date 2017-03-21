console.log("WRITE YOUR SOLUTION IN HERE!");

// while (g.at(x, y, "color white"))
// {
// 	d.move();
// }

// if (g.at(x + 1, y, "color gray"))
// {
// 	d.orient("down");
// }


// if (g.at(x, y + 1, "color gray")){
// 	d.orient("right");
// }

// if (g.at(x + 1, y, "color gray") && g.at(x, y + 1, "color ")) {
// 	d.orient("up");
// }

var num = 0;

while (num < 4) {
	d.move();
	num = num + 1;
}

d.orient("down");

num = 0;

while (num < 16) {
	d.move();
	num = num + 1;
}

d.orient("right");

num = 0;

while (num < 6) {
	d.move();
	num = num + 1;
}

d.orient("up");

num = 0;

while (num < 11) {
	d.move();
	num = num + 1;
}

d.orient("right");

num = 0;

while (num < 6) {
	d.move();
	num = num + 1;
}

d.orient("down");

num = 0;

while (num < 9) {
	d.move();
	num = num + 1;
}

d.orient("right");

num = 0;

while (num < 2) {
	d.move();
	num = num + 1;
}
// d.orient("down")
// d.move()
// d.move()
// d.move()
// d.move()

