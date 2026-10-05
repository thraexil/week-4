let sparkX = [];
let sparkY = [];
let sparkSize = [];
let sparkGrow = [];
let sparkSpeed = [];
let sparkXSpeed = [];
let sparkYSpeed = [];
let r = [];
let g = [];
let b = [];


function setup() {
  createCanvas(800, 800);

  for (let i = 0; i < 750; i = i + 1){
    sparkX.push(random(0,800))
    sparkY.push(random(0,800))
    sparkSize.push(random(10,70))
    sparkGrow.push(1);
    sparkSpeed.push(random(1,5))
    sparkXSpeed.push(random(-1, 1));
    sparkYSpeed.push(random(-1, 1));
    r.push(random(0, 255));
    g.push(random(0, 255));
    b.push(random(0, 255));
  }
}

function draw() {
  background(0, 5);

  if (random(1) < 0.02) {
    sparkXSpeed[i] = random(-1, 1);
    sparkYSpeed[i] = random(-1, 1);
  }

  for(i=0;i<sparkX.length;i++)
  {
    sparkX[i] = sparkX[i] + sparkXSpeed[i];
    sparkY[i] = sparkY[i] + sparkYSpeed[i];

    sparkSize[i] = sparkSize[i] + sparkGrow[i];

    if (sparkSize[i] > 70) {
      sparkGrow[i] = -1;
    }

    if (sparkSize[i] < 30) {
      sparkGrow[i] = 1;
    }

    stroke(r[i], g[i], b[i]);
    strokeWeight(1);
    fill(r[i], g[i], b[i]);

    // random shapes
    if (random(1) < 0.33) {
      circle(sparkX[i], sparkY[i], 10);
    } else if (random(1) < 0.5) {
      square(sparkX[i], sparkY[i], 10);
    } else {
      point(sparkX[i], sparkY[i]);
    }

    if (sparkX[i] > 800) {
      sparkX[i] = 0;
    }

    if (sparkX[i] < 0) {
      sparkX[i] = 800;
    }

    if (sparkY[i] > 800) {
      sparkY[i] = 0;
    }

    if (sparkY[i] < 0) {
      sparkY[i] = 800;
    }
  }
}



function keyPressed() {
  if (key === "Backspace") {
    background(0);

    for (let i = 0; i < 750; i++) {
      sparkX[i] = random(0, 800);
      sparkY[i] = random(0, 800);
      sparkSize[i] = random(1, 3);
      sparkGrow[i] = 1;
      sparkSpeed[i] = random(1, 5);
      sparkXSpeed[i] = random(-1, 1);
      sparkYSpeed[i] = random(-1, 1);
      r[i] = random(0, 255);
      g[i] = random(0, 255);
      b[i] = random(0, 255);
    }
  }
}
