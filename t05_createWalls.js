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

	ball_1 = new Sprite(width/2, height/2, 50, 'd');
	ball_1.color = 'cyan';
	ball_1.vel.x = 2;
	ball_1.bounciness = 1;
	ball_1.friction = 0;
	ball_1.drag = 0;
	
	wallLH  = new Sprite(0, 0, 8, windowHeight, 'k');
	wallLH.color = 'black';

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