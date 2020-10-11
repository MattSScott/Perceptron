//Daniel Shiffman's Perceptron extended to allow multiple training inputs of variable size
//Used to help understand ICL Year 3 EEE ML course
//Code by Matthew Scott

let points = [];
let training = [];
const totalPoints = 50;
const trainingSize = 10;
let perceptron;
let learnRate = 0.8;

function setup(){
  createCanvas(800,800);
  for(let i=0; i<totalPoints; i++){
    let x = random(width);
    let y = random(height);
    points.push(new Point(x,y));
  }
  for(let i=0; i<trainingSize; i++){
    let pt = points[i];
    let v = [1, pt.x, pt.y, pt.label];
    training.push(v);
  }
   perceptron = new Perceptron(training[0].length-1, learnRate);
}

function draw(){
  background(255);
  for(let p of points){
    p.show();
  }

  for(let p of points){
    let tmp = [1, p.x, p.y];
    let g = guess(tmp, perceptron.weights);
    noStroke();
    if(g == p.label){
      fill(0,255,0);
    }
    else{
      fill(255,0,0);
      // tmp.push(p.label); give it a hand if it's struggling!
      // training.push(tmp);
    }
    ellipse(p.x,p.y,8,8);

  }
}

function mousePressed(){
  perceptron.train(training);
  console.log("current weighting: ",perceptron.weights);
}
