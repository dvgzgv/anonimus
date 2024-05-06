let img;

function setup() {
  createCanvas(626, 357);
  ;
}

function draw() {
  noStroke()
  fill(random(colorlist));
  ellipse(mouseX, mouseY, 25, 25);
}