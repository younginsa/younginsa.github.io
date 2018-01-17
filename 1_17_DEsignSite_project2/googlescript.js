
$(document).ready(function(){
 $('.ideaBulb').click(function(){
   console.log('clicked!');
   var sketchItem = $('input[name=sketchListItem]').val();
    $('.list').append('<div class="item">'+sketchItem+'</div>');
    });


    $(document).on('click','.item',function(){
      var searchIt = $(this).text();
      console.log('searchIt')
      myFunction(searchIt);
      $(this).remove();

    });
  });


  function myFunction(searchIt) {

      var myWindow = window.open("https://www.google.com/search?q="+searchIt, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=400,height=400");

  }
