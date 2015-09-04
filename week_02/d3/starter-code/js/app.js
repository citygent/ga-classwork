
// $(document).ready(function(){
//   console.log('ready!');
//   $('li').on('click', function(event) {
//     console.log(e); // returns click event.
//   });
// });
// // returns click event.

// $(document).ready(function(){
//   console.log('ready!');
//   $('li').on('click', function(event) {
//     console.log(this.getAttribute('class')); // THIS IS THE JAVASCRIPT RETURN (singular).
//     console.log($(this).attr('class')); // THIS IS THE JQUERY ONE, NEED TO USE THIS TO USE JQUERY EVENTS.
//   });
// }); 
// // returns element (li). 


// $(document).ready(function(){
//   console.log('ready!');
//   $('li').on('click', function(event) {
//     console.log(this.getAttribute('class')); // THIS IS THE JAVASCRIPT RETURN (singular).
//     console.log($(this).attr('class')); // THIS IS THE JQUERY ONE, NEED TO USE THIS TO USE JQUERY EVENTS.
//   });
// }); 

$(document).ready(function() {
  console.log('ready!');
  $('li').on('click', function(e) {   //SETS UP EVENT LISTENERS FOR ALL LIST ITEMS
    var $element = $(this);
    $element.fadeOut(2000, 'swing', function() {
      setTimeout(function() {
        $element.show(2000);
      }, 1000);
    });
  });
});

