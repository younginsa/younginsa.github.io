// A wind direction vector
var wind;
// Circle position
var position;
var bubbles = [];


function setup() {
  createCanvas(720, 200);
  // Request the data from apixu.com
  var url = 'https://api.apixu.com/v1/current.json?key=513d8003c8b348f1a2461629162106&q=NYC';
  loadJSON(url, gotWeather);
  // Circle starts in the middle
  position = createVector(width/2, height/2);
  // wind starts as (0,0)
  wind = createVector();

  for(var i=0; i<5; i++){
    bubbles[i] =  {
          position : createVector(width/2, height/2),
          displayIt: function(){
              stroke(random(10,200),random(10,200),random(10,200));
               // strokeWeight(4);
              noFill();
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
  background('rgba(0,0,0,.1)');
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
  // Get the angle (convert to radians)
  var angle = radians(Number(weather.current.wind_degree));
  // Get the wind speed
  var windmag = Number(weather.current.wind_mph);

  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.current.temp_f) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");
  // Make a vector
  wind = p5.Vector.fromAngle(angle);

  }
