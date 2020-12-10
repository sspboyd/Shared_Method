// Globals easily shared between sketches
// no P5.js methods here
const canvasW = 521
const canvasH = 322;

// Global function that doesn't work because 
// it isn't in a p5 object?? 
// How to set this up so we can share a method 
// across more than one sketch/canvas??
const draw_rect = function () {
  rect(100, 100, 10, 10); // no context for the rect() method here
  p55.rect(100, 100, 10, 10); // no context for p55 here unlike in the code below.
};


// Sketch 1
const sketch1 = (p55) => { 
  p55.setup = () => {
    p55.createCanvas(canvasW, canvasH);
  };

  p55.draw = () => {
    p55.background(76, 123, 199);
    p55.fill(47, 123);
    p55.noStroke();
    p55.rect(p55.mouseX, p55.mouseY, 47, 47);
    draw_rect(); // breaks
  };
};

let myp5_sketch1 = new p5(sketch1, "sketch1");


// Sketch 2
const sketch2 = (p55) => { 
  p55.setup = () => {
    p55.createCanvas(canvasW, canvasH);
  };

  p55.draw = () => {
    // including some example drawing code
    p55.background(76, 47, 123);
    p55.fill(255, 199);
    p55.noStroke();
    p55.ellipse(p55.mouseX, p55.mouseY, 47, 47);
    draw_rect(); // breaks
  };
};

let myp5_sketch2 = new p5(sketch2, "sketch2");