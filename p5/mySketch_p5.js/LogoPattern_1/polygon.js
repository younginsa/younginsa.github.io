function Polygon(){
  this.vertices = [];
  this.edges = [];

  this.addVertex = function(x,y){
      var a = createVector(x,y);

      var total = this.vertices.length;

      if(total>0){
        var prev = this.vertices[total-1];
        var edge = new Edge(prev,a);

        this.edges.push(edge); //appending to this.edges array
      }
          this.vertices.push(a); //appending to this.edges array

    }

  this.close = function(){
    var total = this.vertices.length;
    var first = this.vertices[0];
    var last = this.vertices[total-1];
    var lastedge = new Edge(last,first);
    this.edges.push(lastedge);

  }

  this.hankin = function(){
    for (var i=0; i<this.edges.length; i++){
      this.edges[i].hankin();
    }

  for(var i=0; i<this.edges.length; i++){
    for(var j=0; j<this.edges.length; j++){
    if(i !== j){
    this.edges[i].findEnds(this.edges[j]);
    }
    }
  }
  }


  this.show = function(){

    for (var i=0; i<this.edges.length; i++){
      this.edges[i].show();
      }
   }


}
