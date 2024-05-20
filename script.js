let img, bulletImg, mosterImg;
var myY, monsterX, monsterY;

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    fill(255);
    image(bulletImg, this.x, this.y, 20, 20);
  }

  move() {
    this.x += 5;
  }
}

var bullets = [];

function setup() {
  createCanvas(900, 575);
  img=loadImage('back.jpg');
  imgQ=loadImage("vv.png");
  bulletImg = loadImage("bullet.png");
  monsterImg=loadImage('www.png');
  monsterY = 200;
  monsterX = 450;
}

function draw() {
  monsterX = 450 + mx(frameCount);
  monsterY = 200 + my(frameCount);

  myY = mouseY;
  background(img);
  image(img, 0, 0);
  image(imgQ, 50, myY, 200, 200);
  image(monsterImg, monsterX, monsterY, 150, 200);
  

  for (var i = 0; i < bullets.length; i++) {
    bullets[i].move();
    bullets[i].draw();

    
     //if (bullets[i].x > width - 50 && bullets[i].y > myY && bullet
  }
}

function keyPressed() {
  if (key == ' ') {
    bullets.push(new Bullet(150, myY+90 ));
  }
}

function mx(t) {
  return sin(t/20)*70 + sin(t/10)*30;
}

function my(t) {
  return cos(-t/20)*150 + sin(-t/30)*20;
}