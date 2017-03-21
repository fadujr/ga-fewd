

if (g.at(x + 1, y, "color gray") && g.at(x, y + 1, "color white"))
{
	d.orient("down");
}
else {
	d.move();
}

if (g.at(x, y + 1, "color gray") && g.at(x + 1, y, "color white")){
	d.orient("right");
}
else
{
	d.move();
}

if (g.at(x + 1, y, "color gray") && g.at(x, y + 1, "color gray")) {
	d.orient("up");
}
