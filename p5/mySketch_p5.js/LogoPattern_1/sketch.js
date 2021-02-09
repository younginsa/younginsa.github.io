//var poly;

var c;
var inp1;
var checkbox;
var polys = [];
var angle = 75;
var delta = 10;
var deltaSlider;
var angleSlider;


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  deltaSlider = createSlider(0,25,5);
  angleSlider = createSlider(0,90,60);
  inp1 = createColorPicker('#ff0000');
  // checkbox = createCheckbox('points', false);
  // checkbox.changed(myCheckedEvent);

  var inc = 100;
  for (var x = 0; x < width; x += inc){
    for (var y = 0; y < height; y += inc){
      var poly = new Polygon();
      poly.addVertex(x,y);
      poly.addVertex(x+inc,y);
      poly.addVertex(x+inc,y+inc);
      poly.addVertex(x,y+inc);
      poly.close();
      polys.push(poly);
    }
  }
}

function draw(){
  background(51);
  angle = angleSlider.value();
  delta = deltaSlider.value();

  c = inp1.color();
  console.log(inp1.value());

  for(var i = 0; i < polys.length; i++){
    polys[i].hankin();
    polys[i].show();
  }
}

// function myCheckedEvent() {
//     if (this.checked()) {
//       // ellipse(hankin.a.x, hankin.a.y,8);
//       // if(hankin.end){
//       //   fill(255,255,0);
//       //   ellipse(hankin.end.x, hankin.end.y, 8);
//       // }
//       console.log('Checking!');
//     } else {
//       console.log('Unchecking!');
//     }
// }
