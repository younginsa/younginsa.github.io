function Edge(a,b){
  this.a = a;
  this.b = b;
  this.h1;
  this.h2;

  this.show = function(){
    stroke(150);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
    this.h1.show();
    this.h2.show();
  }

  this.hankin = function(){
    var mid = p5.Vector.add(this.a, this.b);
//    console.log(mid);
    mid.mult(0.5); //changes mid val
    // console.log(mid);
    // console.log("----------");

    var v1 = p5.Vector.sub(this.a, mid);
    var v2 = p5.Vector.sub(this.b, mid);
    offset1 = mid;
    offset2 = mid;

    if(delta>0){
     v1.setMag(delta);
     v2.setMag(delta);
     var offset1 = p5.Vector.add(mid, v2);
     var offset2 = p5.Vector.add(mid, v1);
    }
     v1.normalize();
     v2.normalize();
     v1.rotate(-angle);
     v2.rotate(angle);


    this.h1 = new Hankin(offset1, v1);
    this.h2 = new Hankin(offset2, v2);

  }

  this.findEnds = function(edge){
    this.h1.findEnd(edge.h1);
    this.h1.findEnd(edge.h2);
    this.h2.findEnd(edge.h1);
    this.h2.findEnd(edge.h2);
  }

}
