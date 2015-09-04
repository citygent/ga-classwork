function add (num1, num2){
  console.log (num1 + num2);
}

add(7,2) // prints 7

function add (num1, num2){
  console.log (num1 + num2);
  return (num1 + num2);
}

add(7,2); // prints and RETURNS 7

function volume (length, width, breadth) {
  length * width * breadth;
}
volume(10, 3, 6);
//undefined
var myVolume = volume(10, 3, 6);
//undefined
function volume(length,width,breadth){
  return length * width * breadth;
}
var myVolume = volume(10, 3, 6);
//180

var volume = function(length,width,breadth){
  console.log('i am before the return keyword');
  return length*width*breadth;
  console.log('do you think i am going to be run???');
};

var myVolume = volume(10, 3, 6);
volume(10, 3, 6);
//I am before the return keyword
//180
myVolume;
//180

//Anonymous functions:
var add = funtion(n1,n2) {
  return n1 + n2;
}
add(10,5)
//15

// Regular functions:
function add(n1, n2) {
    return n1 + n2;
}
add(10,5)
//15

//DIFERENCE: 

console.log(square(5));
function square(n) { return n*n;}
//returns 25.
console.log(square(5));
var square = function(n){
    return n * n;
};
//returns: ERROR: SQARE IS NOT DEFINED. 

var num1 = 10;

var add = function(num2, num3) {
  var num4 = 5;
  return num1 + num2 + num3 + num4;
};

var multiply = function(num5, num6) {
  return num4 * num5 * num6;
};

console.log(add(2,3));
//20
 multiply(2,3);
 // ERROR: Num4 undefined. 

 var multiply = function ( num5, num6) {
  var num4 = 10;
  var num1 = 6;
  return num4 * num5 * num6 * num1;
 };

 multiply(2,3);
 //360

 var name = 'ALEX';
  function getScore() {
    var num1 = 2, num2 =3;  // Declaring both on one line! 

    function add() {
      return name + "scored " + (num1 + num2);
    }
    return add();
  }

getScore();
//ALEX scored 5
add();
//ERROR: Add is undefined.