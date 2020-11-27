let eyeMotion = 0;
let equation = [];
let eLocation = [];
let eSize = [];
let numEquations = 2;

let cyclePos;


function preload() {
   equation[0] = loadImage ('equation1.png'); 
  equation[1] = loadImage ('equation2.png');
 }

function setup() {
  createCanvas(400, 400);
  noStroke();
  
  
  for (let i = 0; i < numEquations; i++){
    eLocation[i] = [];
    eSize[i] = [];
    }
}

function draw() {
  background('grey');
 //console.log("x: " + mouseX + ", y: " + mouseY);
  
  eyeMotion = constrain(map(mouseX, 0, width, -5, 5), 0, 5);
  
  cyclePos = frameCount % numEquations;
  
  
  // neck+shoulder
  push();
  beginShape();
  fill('white');
  vertex(258, 262);
  quadraticVertex(316, 237, 360, 187);
  vertex(381, 203);
  vertex(366, 350);
  vertex(266, 350);
  quadraticVertex(254, 305, 258, 262);
  endShape(CLOSE);
  pop();
  push();
  beginShape();
  fill('white');
  vertex(160, 308);
  quadraticVertex(146, 333, 149, 350);
  vertex(186, 350);
  vertex(160, 308);
  endShape(CLOSE);
  pop();
  
    //hair left side
  push();
  fill(191, 159, 106);
  beginShape();
  vertex(200, 51);
  vertex(172, 51);
  quadraticVertex(159, 71, 161, 85);
  quadraticVertex(153, 100, 158, 114);
  quadraticVertex(149, 152, 174, 195);
  quadraticVertex(169, 212, 174, 224);
  vertex(157, 262);
  quadraticVertex(152, 317, 182, 350);
  vertex(271, 350);
  quadraticVertex(260, 321, 275, 328);
  quadraticVertex(259, 290, 268, 281);
  vertex(259, 262);
  vertex(200, 51);
  endShape();
  pop();
  
  //face
  push();
  beginShape();
  fill(200,150,130);
  vertex(200, 51);
  quadraticVertex(189, 74, 191, 96);
  quadraticVertex(190, 112, 193, 120);
  vertex(194, 132);
  quadraticVertex(189, 144, 203, 178);
  quadraticVertex(203, 185, 214, 199);
  quadraticVertex(216, 217, 227, 229);
  vertex(237, 252);
  quadraticVertex(249, 266, 287, 259);
  quadraticVertex(303, 246, 326, 234);
  vertex(357, 205);
  quadraticVertex(362, 199, 363, 188);
  quadraticVertex(348, 172, 350, 154);
  vertex(331, 82);
  quadraticVertex(321, 61, 302, 51);
  vertex(200, 51);
  endShape(CLOSE);
  pop();
  
  //mouth
  push();
  fill('#DC8D88');
  beginShape();
  vertex(224, 208);
  quadraticVertex(227, 198, 250, 204);
  quadraticVertex(272, 200, 283, 204);
  quadraticVertex(253, 224, 224, 208);
  endShape();
    push();
    translate(226, 208);
    stroke('brown');
    line(6, 0, 40, 0);
    pop();
  pop();
  
  //eyebrows
  push();
  beginShape();
  fill(66, 40, 14);
  vertex(249, 107);
  quadraticVertex(273, 98, 299, 114);
  quadraticVertex(272, 105, 249, 107);
  endShape(CLOSE);
  pop();
  
  push();
  beginShape();
  fill(66, 40, 14);
  vertex(222, 107);
  quadraticVertex(202, 98, 193, 114);
  quadraticVertex(202, 105, 222, 107);
  endShape(CLOSE);
  pop();
  
  //nose
  push();
  beginShape();
  fill(240,150,140);
  vertex(225, 104);
  quadraticVertex(236, 114, 232, 127);
  quadraticVertex(230, 131, 229, 140);
  vertex(223,159);
  quadraticVertex(215, 173, 223, 176);
  quadraticVertex(226, 173, 229, 175);
  quadraticVertex(234, 180, 243, 176);
  quadraticVertex(244, 170, 259, 174);
  quadraticVertex(275, 167, 258, 158);
  quadraticVertex(248, 137, 250, 120);
  quadraticVertex(238, 109, 225, 105);
  endShape(CLOSE);
  pop();
  
  //hair right side
  push();
  beginShape();
  fill(191, 159, 106);
  vertex(300, 51);
  quadraticVertex(326, 65, 326, 80);
  vertex(346, 139);
  quadraticVertex(351, 148, 349, 171);
  quadraticVertex(359, 189, 377, 201);
  quadraticVertex(358, 230, 359, 255);
  vertex(359, 294);
  quadraticVertex(338, 318, 348, 350);
  vertex(400, 350);
  vertex(400, 51);
  vertex(303, 51);
  endShape(CLOSE);
  pop();
  
  push();
  fill(0);
  rect(0, 0, 400, 52);
  rect(0, 350, 400, 50);
  pop();
  
  
  //left eye
  push();
  translate(0, 125);
  fill(255);
    push();
    translate(width/1.9, 0);
    ellipse(0, 0, 28, 15);
      push();
      translate(eyeMotion, 0);
      fill(130, 90, 0);
      ellipse(-4, 1, 14, 14);
        push();
        translate(width/2);
        fill(0);
        ellipse(-4, 1, 7, 7);
        pop();
      pop();
    pop();
  pop();
  
//right eye
  push();
  translate(0, 125);
  fill(255);
    push();
    translate(width/1.9+64, 0);
    ellipse(0, 0, 28, 15);
      push();
      translate(eyeMotion, 0);
      fill(130, 90, 0);
      ellipse(-4, 1, 14, 14);
        push();
        translate(width/2);
        fill(0);
        ellipse(-4, 1, 7, 7);
        pop();
      pop();
    pop();
  pop();
  
  if (frameCount % 20 == 0){
    for(let i = 0; i < numEquations; i++){
      eSize[i][0] = random(width);
      eSize[i][1] = random(height);
      eLocation[i][0] = random(width);
      eLocation[i][1] = random(height);
    }
  }
  
  for (let i = 0; i < numEquations; i++){
    image(equation[i], eLocation[i][0], eLocation[i][1],  eSize[i][0], eSize[i][1]);
  }

}
