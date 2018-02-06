var bubbles = [];


function setup() {
  createCanvas(600,400);
  for(var i=0; i<5; i++){
    bubbles[i] =  {
           x: 200,
           y: 300,
           name: 'Sa',
          displayIt: function(){
             stroke(255);
             // strokeWeight(4);
             noFill();
             ellipse(this.x, this.y, 20, 20);
           },
          move: function(){
             this.x = this.x + random(-2,2);
             this.y = this.y + random(-2,2);
             if(this.x <50 || this.y<200){
               this.x += 100;
               this.y += 100;
               console.log('+Bang!');
              } else if(this.x>550 || this.y>400){
                 this.x -= 100;
                 this.y -= 100;
                 console.log('-Bang!');
              }
             }
            }
        }
      }


function draw() {
  background('rgba(0,0,0,.1)');
  translate(100,-100);

  for(var i=0; i<bubbles.length; i++){
    bubbles[i].displayIt();
    bubbles[i].move();
    }
  }
