// var num;
var numI;
var sketchItem;
var size;
var sketchPos=[];
var sketchPosNEW;
var Itemdiv;


$(document).ready(function(){
  var num=0;
  var classNum; //to apply width seperately
 $('.ideaBulb').click(function(){

    sketchItem = $('input[name=sketchListItem]').val();
    size = sketchItem.length;

    console.log('****');
    console.log(size);
    console.log(classNum);
    console.log('****');

    Itemdiv = '<div class="item ui-widget-content ' + num + '"' + '>' + sketchItem + '</div>';
    classNum = '.'+num;
    $('.list').prepend(Itemdiv);
    $(classNum).css({width : size*30+'px'});
    $( ".item" ).draggable(); //ui-jQuery


    var itemDivPos = '.' + num;
    sketchPos.push($(itemDivPos).position());

    num++;
    numI=0;
    sketchPosNEW=[];

    console.log('clicked!');
    console.log($(itemDivPos).position());
    console.log(sketchPos);
    console.log("---------------------");
    console.log(sketchPosNEW);


//--- checking update in .list position at every click
    // for(var i = 0; i<sketchPos.length; i++ ){
    //     var newArray = "." + numI;
    //     sketchPosNEW.push($(newArray).position());
    //     numI++;
    //   }

//--- compare position of original array vs newarray -------//

  //want to figure out how to insert div to empty spot

    // for(var i = 0; i<sketchPos.length; i++ ){
    //   if((sketchPosNEW[i].top !== sketchPos[i].top)
    //   && (sketchPosNEW[i].left !== sketchPos[i].left)){
    //     // $('.list').prepend(Itemdiv);
    //     // $( ".item" ).draggable(); //ui-jQuery
    //     var InsertDiv = '.'+ i;
    //     $(Itemdiv).insertBefore($(InsertDiv));
    //     console.log('you moved! ' + 'array ' + [i]);
    //     console.log(sketchPosNEW[i]);
    //     }
    //   }

  }); //<---------click function closed



//------ Enter Key triggering click.bulb & clear input area-------//

$(document).keypress(function(e){
    if (e.which == 13){
        $('.ideaBulb').click();
        e.preventDefault();
        $('input[name=sketchListItem]').val('');

      }
  });


//-----divide Click_Dbclick action--------//

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
        //  doClickAction();
        }
        prevent = false;
      }, delay);
    })
    .on('dblclick','.item', function() {
      $(this).remove();
      clearTimeout(timer);
      prevent = true;
    //  doDoubleClickAction();
    });


  }); //<---------document.ready closed


  //--------search clicked text--------//
// , "toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=400,height=400
// ↑ upper code added after "_black", is to open new tab(depends on personal setting though,)
  function myFunction(searchIt) {
      var myWindow = window.open("https://www.google.com/search?q="+ searchIt, "_blank");
      // win.focus();
  }

  //----
