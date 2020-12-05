function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);

}

function draw() {
  background(200);
  strokeWeight(4);
  stroke("gold");
  fill(255);
  ellipse(400,400,680,680);


  noStroke();
  fill(0);
  textSize(30);
  text("12",400,150);
  text("3",650,400); 
  text("6",400,650); 
  text("9",150,400);

  text("1",540,200);   
  text("2",620,283); 
  text("4",620,513); 
  text("5",540,600); 
  text("11",260,200); 
  text("10",180,280); 
  text("8",180,513);
  text("7",260,600);  

  var hr=hour();
  var m=minute();
  var s=second();

  translate(400,400);
  rotate(-90)

  var scAngle=map(s,0,60,0,360);
  var mnAngle=map(m,0,60,0,360);
  var hrAngle=map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(4);
  line(0,0,200,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(4);
  line(0,0,150,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(4);
  line(0,0,100,0);
  pop();

  

  strokeWeight(7);
  noFill();
  stroke(255,0,0);
  arc(0,0,610,610,0,scAngle);
  stroke(0,255,0);

  arc(0,0,630,630,0,mnAngle);
  stroke(0,255,0);

 // arc(0,0,650,650,0,hrAngle);
 // stroke(0,255,0);
  
}

  
