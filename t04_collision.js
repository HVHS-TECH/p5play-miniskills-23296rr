/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()

/*******************************************************/
function setup() {
	console.log("setup: ");

	world.gravity.y = 10;

	cnv = new Canvas(windowWidth, windowHeight);

	box = new Sprite (100, 300, 150, 150)
	box.color = '#5656';
	
	box2 = new Sprite (100, 800, 150, 20, 'k')
	box2.color = '#5656';
	box2.rotation = 1
	box2.bounciness = 1

	box3 = new Sprite (490, 760, 150, 20, 'k')
	box3.color = '#5656';
	box3.rotation = 1
	box3.bounciness = 1

	box4 = new Sprite (900, 1000, 150, 20, 'k')
	box4.color = '#5656';
	box4.rotation = 0.1
	box4.bounciness = 1.075
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('234')
}

/*******************************************************/
//  END OF APP
/*******************************************************/