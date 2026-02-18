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

	

	cnv = new Canvas(1000, 800);
	
	ball_1 = new Sprite(width/2, height/2, 50, 'd');
	ball_1.bounciness = 1;
	ball_1.friction   = 0;
	ball_1.image = (imgFace);
	imgFace.resize(50, 50);

	
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBG);

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

	

	cnv = new Canvas(1000, 800);
	
	ball_1 = new Sprite(width/2, height/2, 50, 'd');
	ball_1.bounciness = 1;
	ball_1.friction   = 0;
	ball_1.vel.x = 0
	ball_1
	ball_1.image = (imgFace);
	imgFace.resize(50, 50);

	
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBG);

	if (kb.pressing('left')) {
		ball_1.vel.x = -3;
	}

	else if (kb.pressing ('right')) {
		ball_1.vel.x = 3;
	}

	if (kb.released('left')) {
		ball_1.vel.x = 0;
	}
}


/*******************************************************/
//  END OF APP
/*******************************************************/
		
}


/*******************************************************/
//  END OF APP
/*******************************************************/