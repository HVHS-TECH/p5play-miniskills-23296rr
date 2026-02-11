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

	ball_2 = new Sprite(300, height/2, 50, 'd');
	ball_2.color = 'white';
	ball_2.bounciness = 1;
	ball_2.drag = 1;

	ball_3 = new Sprite(1600, height/2, 50, 'd');
	ball_3.color = 'black';
	ball_3.bounciness = 1;
	ball_3.drag = -0.4;

	
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
	background('234')
}

/*******************************************************/
//  END OF APP
/*******************************************************/