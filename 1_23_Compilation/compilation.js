$(document).ready(function(){
  var verticalGrid = '<div class="gridWidth"></div>';
  var verticalGridWeek = '<div class="gridWidthWeek">'
  var horizentalGrid = '<div class="gridHeight"></div>';
  var screenWidth = $(window).width();
  var screenHeight = $(window).height();
  var gridMargin = $(window).width() * 0.05;
  console.log("this is screenWidth " + screenWidth + "\nthis is screenheight " + screenHeight);

//-----background Grid-------//
  var iTotal=0;
  var jTotal=0;
  var weekTotal=1;
  var monthTotal=0;

  for(var i=0; i<screenWidth; i+=screenWidth/25){

      if(iTotal%4 === 1){
        $('.BGgridWidth').append(verticalGridWeek + '<span class="weekPos">' + weekTotal +'</span>'+ "</div>");
        weekTotal++;
      }else{
        $('.BGgridWidth').append(verticalGrid);
        monthTotal++;
      }
      iTotal++;
    }

  console.log("week total " + weekTotal);
  console.log("month total " + monthTotal);
  console.log("i " + i);
  console.log("iTotal "+ iTotal);

  for(var j=0; j<screenHeight-gridMargin; j+=gridMargin){
    $('.BGgridHeight').append(horizentalGrid);
      jTotal++;
      console.log("made Hgrid!");
    }

$(window).resize(function(){
    screenWidth = $(window).width();
    screenHeight = $(window).height();
    gridMargin = $(window).width() * 0.05;
    $(".gridHeight").remove();
    jTotal=0;
    for(var j=0; j<screenHeight-gridMargin; j+=gridMargin){
      $('.BGgridHeight').append(horizentalGrid);
        jTotal++;
        }
    console.log("window resized!");
    console.log("gridMargin "+gridMargin);

  });


//----num on top as fixed in vertical---------
  var topOffset = parseInt($(".weekPos").css('top'));
  $(window).scroll(function(){
      $('.weekPos').css({
          'top': $(this).scrollTop() + topOffset
      });
  });

//-----Click------//
  $('.core').on('click', function(){
      $('.weekBox').toggleClass('weeks');
  });

  $('.one').on('click', function(){
      $('.ExerciseOne').toggleClass('ExOne');
  });

 });
