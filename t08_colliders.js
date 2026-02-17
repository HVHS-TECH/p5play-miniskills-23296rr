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
	const VELARRAY = [-1, 1];

	var scoreEat = 0;

	cnv = new Canvas(500, 500);

	ball_1 = new Sprite(width/2, height/2, 50, 'd');
	ball_1.color = 'grey';
	ball_1.bounciness = 1;

	alienGroup = new Group();

	for (i = 0; i < 100; i++) {
		randNum = random(4, 7) * random(VELARRAY);
		randLocX = random(0, 500)
		randLocY = random(0, 500)
		alien = new Sprite(randLocX, randLocY, 10, 10);
		alien.vel.x = randNum;
		alien.vel.y = randNum;
		alien.bounciness = 1;
		alien.friction = 0;
		alien.drag = 0;
		alienGroup.add(alien);
	}
	alienGroup.collides(ball_1, func2Call);

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

function func2Call(_ssss, _ball_1) {

// Delete the alien which was hit

_ssss.remove();
scoreEat = +1
console.log(scoreEat)
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