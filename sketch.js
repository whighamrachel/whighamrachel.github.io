function setup() {
  createCanvas(800, 900);
}

function draw() {
  background('white');
  noStroke()
  fill(176, 196, 222);
  rect(40, 300, 60, 60);
  
  noStroke()
  fill(29, 61, 63);
  rect(180, 300, 60, 60);

  noStroke()
  fill(240, 230, 140);
  rect(320, 300, 60, 60);

  noStroke()
  fill(139, 44, 58);
  rect(460, 300, 60, 60);

  noStroke()
  fill(255, 97, 71);
  rect(600, 300, 60, 60);

  noStroke()
  fill(156, 204, 189);
  rect(740, 300, 60, 60);


  textSize(32);
  fill(100);
  text('hey, its whigs.', 340, 200);
}
