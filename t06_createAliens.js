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

	world.gravity.y = 0;

	alienXvel = random()
	alienYvel = random()

	cnv = new Canvas(500, 500);

	ball_1 = new Sprite(width/2, height/2, 50, 'd');
	ball_1.color = 'grey';
	ball_1.bounciness = 1;

	for (i = 0; i < 100; i++) {
		alien = new Sprite(250, 250, 10, 10);
		alien.vel.x = alienXvel;
		alien.vel.y = alienYvel;
		alien.bounciness = 1;
		alien.friction = 0;
		alien.drag = 0;
	}

	wallLeft  = new Sprite(4, windowHeight/2, 8, windowHeight, 'k');
	wallLeft.color = 'black';
	wallLeft.rotation = 0;

	floor  = new Sprite(windowWidth/2, 500-4, windowWidth, 8, 'k');
	floor.color = 'red';
	floor.rotation = 0;

	wallRight  = new Sprite(500-4, windowHeight/2, 8, windowHeight, 'k');
	wallRight.color = 'blue';
	wallRight.rotation = 0;

	roof  = new Sprite(windowWidth/2, 4, windowWidth, 8, 'k');
	roof.color = 'yellow';
	roof.rotation = 0;
}

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#999999')
}

/*******************************************************/
//  END OF APP
/*******************************************************/