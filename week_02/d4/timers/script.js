// var polarBear = null;

$(document).ready(function() {
  console.log( "ready!" );

  var polarBear = $('.polarbear');
  console.log(polarBear);
  
  setInterval(walkRight(polarBear), 1000);

});

function walkRight(element) {
  var currentPositonLeft = element.position().left;
  var newLeftPosition = currentPositonLeft + 10;
  console.log(currentPositonLeft);
  element.css('left', newLeftPosition + 'px');
}

// $(document).ready(function() {
//   console.log( "ready!" ); 
//   // console.log(polarBear);
  
//   setInterval(walk, 1000);

// });

// function walk() {
//   var polarBear = $('.polarbear');
//   var currentPositonLeft = polarBear.position().left;
//   var newLeftPosition = currentPositonLeft + 100;
//   console.log(currentPositonLeft);
//   polarBear.css('left', newLeftPosition + 'px');
// }

