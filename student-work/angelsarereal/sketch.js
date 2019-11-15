let array = [];
let backgroundColor = 200;
let gridArray = []; // color of cells in array

function setup() {
  createCanvas(600, 600);
  background(backgroundColor);


  drawGrid();
  noFill();
  strokeWeight(5);
}


function draw() {

  if (mouseIsPressed) {
    backgroundColor -= 5;
    background(backgroundColor);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);

    beginShape();
    for (let i = 0; i < array.length; i++) {
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();
  }

}

function keyTyped() {

  if (key === 's') {
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    // display image
    background(255);

    beginShape();
    for (let i = 0; i < array.length; i++) {
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();

  }

  return false;

}

function mousePressed() {
  array = [];
  backgroundColor = 255;
}

function drawGrid() {



  numCells = 20;
  fillColor = 255;
  // noStroke();
  strokeWeight(0);

  let x;
  let y;

  for (let i = 0; i <= numCells; i += 1) {
    gridArray[i] = [];

    for (let j = 0; j <= numCells; j += 1) {
      x = i * width / numCells;
      y = j * height / numCells;

      if (fillColor === 255) {
        fillColor = 200;
        gridArray[i][j] = 200
      } else {
        fillColor = 255;
        gridArray[i][j] = 255;

      }
      fill(fillColor);
      rect(x, y, width / numCells, height / numCells);
    }
  }

  strokeWeight(5);
  console.log(gridArray);
}
