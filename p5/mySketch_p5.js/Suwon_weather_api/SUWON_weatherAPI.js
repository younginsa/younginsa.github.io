// A wind direction vector
var wind;
var BGtemp;
// Circle position
var position;
var bubbles = [];



  // // Request the data from apixu.com
  // var url = 'http://api.apixu.com/v1/current.json?key=1b2ae85d8ffa4cf59b6203012180302&q=providence';
  // loadJSON(url, gotWeather);


function setup() {
  createCanvas(windowWidth-100, 400);

 // Request the data from apixu.com
  var url = 'http://api.apixu.com/v1/current.json?key=1b2ae85d8ffa4cf59b6203012180302&q=Suwon';
  loadJSON(url, gotWeather);

  wind = createVector();
  BGtemp = 255;

  for(var i=0; i<5; i++){
    bubbles[i] =  {
          position : createVector(windowWidth-120, 10),
          displayIt: function(){
              noFill();
              stroke(BGtemp);
              // fill(random(10,200),random(10,200),random(10,200));
              ellipse(this.position.x, this.position.y, 20, 20);
            },
          move: function(){
              this.position.x = this.position.x + random(-2,2);
              this.position.y = this.position.y + random(-2,2);
              this.position.add(wind);

              if (this.position.x > width)  this.position.x = 0;
              if (this.position.x < 0)      this.position.x = width;
              if (this.position.y > height) this.position.y = 0;
              if (this.position.y < 0)      this.position.y = height;
               }
              }
          }


    }



function draw() {

  background(255,10);
 
  // This section draws an arrow pointing in the direction of wind
  push();
  translate(32, height - 32);
  // Rotate by the wind's angle
  rotate(wind.heading() + PI/2);
  noStroke();
  fill(255);
  ellipse(0, 0, 48, 48);

  stroke(45, 123, 182);
  strokeWeight(3);
  line(0, -16, 0, 16);

  noStroke();
  fill(45, 123, 182);
  triangle(0, -18, -6, -10, 6, -10);
  pop();

  // Move in the wind's direction
  stroke(0);
  fill(51);

  for(var i=0; i<bubbles.length; i++){
    bubbles[i].displayIt();
    bubbles[i].move();

    }

  // fill('rgb(255,0,0)');
  // ellipse(position.x, position.y, 30, 30);


  }



function gotWeather(weather) {
  var city = weather.location.name;
  var region = weather.location.region;
  var update = weather.current.last_updated;
  console.log(city+' ' + region + ' ' + update);

  temp = Number(weather.current.temp_c);
  BGtemp = "rgba(" + (200+temp*10) + ",80," + (150-temp*10) + ",.3)";
  console.log(BGtemp);

  // Get the angle (convert to radians)
  var angle = radians(Number(weather.current.wind_degree));
  // Get the wind speed
  var windmag = Number(weather.current.wind_mph);

  // Display as HTML elements
  var info = createDiv(city+' ' + region + ' ' + update);
  info.addClass('Info');
  var windDiv = createDiv(" <small>pvd WIND </small>" + windmag + " <small>MPH</small>");
  var tempDiv = createDiv(" <small>pvd TEMP </small>" + temp + " <small>&degC</small>");

  // Make a vector
  wind = p5.Vector.fromAngle(angle);

  }



//   $(document).ready(function(){

//   function getData(){
//     $.getJSON("http://api.apixu.com/v1/current.json?key=1b2ae85d8ffa4cf59b6203012180302&q=providence",function(result){
//           console.log(result);
//       });
//   }


//   setInterval(getData(),1000);

// });
