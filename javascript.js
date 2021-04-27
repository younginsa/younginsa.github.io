$(document).ready(function(){


//Rect animation
    $(".Onerect").mouseover(function(){
      element = document.getElementById(this.id);
      console.log(element);
      rectFunction();

      //Cursor effect
      $(document).mousemove(function(e){
        console.log('moved!');
          $('#follower').css({
             left:  e.pageX,
             top:   e.pageY
          });
      });

      //rect effect
      $(".Onerect").mouseout(function(){
        rectOutFunction();
      });

      function rectFunction(){
        document.getElementById(element.id).classList.add("rectTrans");
      }

      function rectOutFunction(){
        document.getElementById(element.id).classList.remove("rectTrans");
        // delete element;
      }
      });




});
