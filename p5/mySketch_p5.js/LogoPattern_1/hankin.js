function Hankin(a, v){
  this.a = a;
  //start point of Hankin (x1,y1), (x3,y3)
  this.v = v;
  this.b = p5.Vector.add(a, v);
  //actual end point of Hankin (x4,y4), (x2,y2)
  this.end;
  this.prevD;

  this.show = function(){
    stroke(c);
    line(this.a.x, this.a.y, this.end.x, this.end.y);
    fill(255);
    // ellipse(this.a.x, this.a.y,8);
    // if(this.end){
    //   fill(255,255,0);
    //   ellipse(this.end.x, this.end.y, 8);
    // }
  }




  this.findEnd = function(other){
    //what is other??
    //line - line intersection
    //this.a, this.v = (P1, P2-P1)
    // other.a, other.v = (P3, P4-P3)
    var den = (other.v.y * this.v.x)-(other.v.x * this.v.y);
    var numa = (other.v.x * (this.a.y - other.a.y)) - (other.v.y * (this.a.x - other.a.x));
    var numb = (this.v.x * (this.a.y - other.a.y)) - (this.v.y * (this.a.x - other.a.x));
    var ua = numa / den;
    var ub = numb / den;
    var x = this.a.x + (ua * this.v.x);
    var y = this.a.y + (ua * this.v.y);

    if(ua > 0 && ub > 0){
      var candidate = createVector(x,y);
      var d1 = p5.Vector.dist(candidate, this.a);
      var d2 = p5.Vector.dist(candidate, other.a);
      var d = d1 + d2;
      //??????
      if(!this.end){
        this.end = candidate;
        this.prevD = d;
      } else if (d < this.prevD){
        this.prevD = d;
        this.end = candidate;
      }
    }
  }

}
