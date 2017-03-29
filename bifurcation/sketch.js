var p = 0.8;
var minR = 2;
var maxR = 4;
var minL = 0;
var maxL = 1;
var dr, dl;
var interval;
var x;

function setup() {
  createCanvas(windowWidth,windowHeight);
  render();
}

function render() {
		clear();
		x = 0;
		dr = (maxR - minR) / width;	
		dl = (maxL - minL) / height;	
		interval = setInterval(iteration, 0);
	}

	function iteration() {
		l = .5;
		for(var i = 0; i < 250; i++) {
			time(i);
		}
		x++;
		if(x >= width) {
			clearInterval(interval);
		}
	}

	function time(timeLapse) {
		var r = minR + x * dr;
		var	y;
		l = l * r * (1 - l);
		if(timeLapse > 100) {
			y = height - (l - minL) / dl;
			fill(0);
			noStroke();
			rect(x, y, 1, 1);
		}

	}