class Perceptron{
  constructor(w, lr){
    let weights = [];
    for(let i=0; i<w; i++){
      weights.push(random(-1, 1));
    }
    this.weights = weights;
    this.lr = lr;
  }

  train(tdata){
    for(let i=0; i<this.weights.length; i++){
      for(let j=0; j<tdata.length; j++){
        let targindex = tdata[j].length-1;
        this.weights[i] = this.weights[i] + (tdata[j][targindex] - guess(tdata[j], this.weights)) * tdata[j][i] * this.lr;
      }
    }
  }
}

function guess(inputs, weights){
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += inputs[i] * weights[i];
  }
  return Math.sign(sum);
}
