class Point{
  constructor(x, y){
    let r = random(0, 1);
    this.x = x;
    this.y = y;
    (this.y > this.x) ? this.label = -1 : this.label = 1;
  }

  show(){
    if(this.label == 1){
      stroke(0);
      fill(255);
    }
    else{
      stroke(255);
      fill(0);
    }
    ellipse(this.x, this.y, 10, 10);
  }
}
