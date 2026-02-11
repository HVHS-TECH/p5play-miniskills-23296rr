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
	ball_1.color = 'grey';
	ball_1.bounciness = 1;

	for (i = 0; i < ???; i++) {
		alien = new Sprite(...);
		alien.vel.x = 3;
		alien.vel.y = 4;
		alien.bounciness = 1;
		alien.friction = 0;
	}
}


function fromSetup() {
	wallLeft  = new Sprite(100, 500, 8, windowHeight, 'k');
	wallLeft.color = 'black';
	wallLeft.rotation = 0;

	floor  = new Sprite(1000, 900, windowWidth, 8, 'k');
	floor.color = 'red';
	floor.rotation = 0;

	wallRight  = new Sprite(1800, 500, 8, windowHeight, 'k');
	wallRight.color = 'blue';
	wallRight.rotation = 0;

	roof  = new Sprite(1000, 100, windowWidth, 8, 'k');
	roof.color = 'yellow';
	roof.rotation = 0;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('243')
}

/*******************************************************/
//  END OF APP
/*******************************************************/