var h = 0;
var coe = 3;
var windspeed;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  //setInterval(askForData, 1000);
}

/*function askForData() {
   var url = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=5108c8c7a75091b2d7c3b29d6cadea81';
  loadJSON(url, gotData);
}*/

function draw() {
  var a = h * 137.5;
  var radius = coe * sqrt(h);
  var x = radius * cos(a) + width/2;
  var y = radius * sin(a) + height/2;
  fill('rgba(255,255,255, 0.70)');
  noStroke();
  //ellipse(x,y,windspeed,windspeed);
  ellipse(x,y,3,3);
  
  h++;
  console.log(windspeed);
}

/*function gotData(weather) {
  
  data = weather;
  windspeed = Number(weather.wind.speed);
}*/
