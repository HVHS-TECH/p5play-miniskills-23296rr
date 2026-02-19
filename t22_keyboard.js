/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by ???
/*******************************************************/
function preload() {
  imgBG   = loadImage('../assets/images/space.jpg');
  imgFace = loadImage('../assets/images/face.png');
}

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	cnv = new Canvas(2700, 1480);
	
	const VELARRAY = [-1, 1];
	var scoreEat = 0;

	ball_1 = new Sprite(width/2, height/2, 50, 'd');
	ball_1.bounciness = 1;
	ball_1.friction   = 0;
	ball_1.vel.x = 0;
	ball_1.vel.y = 0;
	ball_1.image = (imgFace);
	imgFace.resize(50, 50);

	alienGroup = new Group();

	for (i = 0; i < 100; i++) {
		randNum = random(4, 7) * random(VELARRAY);
		randLocX = random(0, 2700)
		randLocY = random(0, 0)
		alien = new Sprite(randLocX, randLocY, 10, 10);
		alien.vel.x = randNum;
		alien.vel.y = 10;
		alien.bounciness = 1;
		alien.friction = 0;
		alien.drag = 0;
		alienGroup.add(alien);
	}
	alienGroup.collides(ball_1, func2Call);
}

function func2Call(_ssss, _ball_1) {
scoreEat = +1
console.log(scoreEat)
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBG);

	if (kb.pressing('left')) {
		ball_1.vel.x = -10;
	}
	else if (kb.pressing ('right')) {
		ball_1.vel.x = 10;
	}
	if (kb.released('left')) {
		ball_1.vel.x = 0;
	}
	else if (kb.released('right')) {
		ball_1.vel.x = 0;
	}
	
	if (kb.presses('up')) {
		ball_1.vel.y = -10;
	}
	else if (kb.pressing ('down')) {
		ball_1.vel.y = 10;
	}
	if (kb.released('up')) {
		ball_1.vel.y = 0;
	}
	else if (kb.released('down')) {
		ball_1.vel.y = 0;
	}
	
	if (scoreEat = 0) {
		location.reload()
	}
}


/*******************************************************/
//  END OF APP
/*******************************************************/