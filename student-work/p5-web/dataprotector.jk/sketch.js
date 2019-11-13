//DOM
//by Eddson Jose
let counter = 0;
let i = 0;
let showInfoBool = false;
let popup = false;
let button, input, title, greeting;
let mic, vol, data;
//-----------------------------------------------------------------------------
let userInfo = [
  "We support",
  "Facebook",
  "Twitter",
  "Instagram",
  "YouTube",
  "Wells Fargo",
  "Bank of America",
  "Chase Bank"
];
//-----------------------------------------------------------------------------
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  input = createInput();
  input.position(width/2 - 100, height*0.6);
  button = createButton('submit');
  button.position(input.x + input.width, height*0.6);
  button.mousePressed(response);
  title = createElement('h1', 'DataProtector.jk');
  title.style('color', '#ffffff');
  title.style('width', '100%');
  title.position(-10, height/3 + 40);
  greeting = createElement('p', 'Secure logins for<br>your favorite websites.<br><br>Enter your email below.');
  greeting.style('color', '#ffffff');
  greeting.style('width', '100%');
  greeting.position(-10, height/3 + 90);
  mic = new p5.AudioIn();
  mic.start();
  textAlign(CENTER);
  textSize(30);
}
//-----------------------------------------------------------------------------
function draw() {
  background(20, 70);
  //Matrix & Slideshow Text Controller
  if (showInfoBool == true) {
    showInfo();
    showMatrix();
  } else {
    showInfoBool = false;
    counter += 1;
    if (counter == 50) {i++; counter = 0;}
    if (i == 8) {i = 0;}
    noStroke();
    fill(255);
    text(userInfo[i], width/2, height*0.7);
  }
  //Volume
  vol = mic.getLevel() * 150;
  // console.log(vol);
  fill(255);
  //Show showInfo()
  if (vol >= 1 && showInfoBool == true) {
    moreInfo();
    noStroke();
    fill(255);
    textSize(12);
    text("...data collected...", width/2, height*0.6);
  }
}
//Hide Button & Input Field----------------------------------------------------
function showInfo() {
  button.hide();
  input.hide();
}
//show 1s & 0s-----------------------------------------------------------------
function showMatrix() {
  stroke(255);
  fill(0, 255, 0);
  textSize(12);
  text("1", random(0, width), random(0, height));
  text("0", random(0, width), random(0, height));
  text("1", random(0, width), random(0, height));
  text("0", random(0, width), random(0, height));
}
//show more 1s & 0s when user talks--------------------------------------------
function moreInfo() {
  stroke(255, 0, 0);
  fill(255, 0, 0);
  textSize(12);
  text("1", random(0, width), random(0, height));
  text("0", random(0, width), random(0, height));
  text("1", random(0, width), random(0, height));
  text("0", random(0, width), random(0, height));
  text("1", random(0, width), random(0, height));
  text("0", random(0, width), random(0, height));
  text("1", random(0, width), random(0, height));
  text("0", random(0, width), random(0, height));
}
//-----------------------------------------------------------------------------
function response() {
  textSize(30);
  const name = input.value();
  greeting.html('Email sent to ' + name + '<br> Login to your favorite websites<br>from our email to keep<br>your data safe.');
  input.value('');
  showInfoBool = true;
}
