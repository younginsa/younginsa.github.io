var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
var myDropdown = document.getElementById("myDropdown");
var i=2;



$(window).scroll(function(){
  myFunction();
});

// sticky resume header
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Close the dropdown if the user clicks outside of it
$(window).click(function(event){
  var elementClasses = document.getElementById("myDropdown");
  if(document.getElementsByClassName('dropbtn')[0].contains(event.target)){
    i++;
    console.log("inside clicked!", i);
  }else if((i%2)&&(!document.getElementsByClassName('sub-menu')[0].contains(event.target))){
    console.log("yes")
    document.getElementById("myDropdown").classList.toggle("show");
    i=2;
  }
});


// function open and close menu by appending class show

function menuFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
