
$(document).ready(function(){
 $('.ideaBulb').click(function(){
   console.log('clicked!');
   var sketchItem = $('input[name=sketchListItem]').val();
    $('.list').append('<div class="item">'+sketchItem+'</div>');
  });


/*
    $(document).on('click','.item',function(){
      var searchIt = $(this).text();
      console.log('searchIt')
      myFunction(searchIt);
      $(this).addClass('donelist');
    });

    $(document).on('dblclick','.item',function(){
        $(this).remove();
    });

    function doClickAction() {
      $("#click h3").append("•");
    }
    function doDoubleClickAction() {
      $("#double-click h3").append("•");
    }

*/

//-----------

var timer = 0;
var delay = 200;
var prevent = false;

$(document)
  .on('click','.item',function() {
    var searchIt = $(this).text();
    console.log(searchIt)
    $(this).addClass('donelist');
    timer = setTimeout(function() {
      if (!prevent) {
        myFunction(searchIt);
        doClickAction();
      }
      prevent = false;
    }, delay);
  })
  .on('dblclick','.item', function() {
    $(this).remove();
    clearTimeout(timer);
    prevent = true;
    doDoubleClickAction();
  });



//------------

  });


  function myFunction(searchIt) {

      var myWindow = window.open("https://www.google.com/search?q="+ searchIt, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=400,height=400");

  }
