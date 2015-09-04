var friends = ['Peter', 'Tim', 'Alex', 'Elie'];

//loop thought with a good ole forloop.
// 96% faster than a forEach
// More difficult to understand.
for (var i=0; i<friends.length; i++) {
  console.log('Hello '+ friends[i] + "!");
}

// forEach is part of the Array method.
// It's slower but easier to read and therefore preferable:f
friends.forEach(function(friend){
  console.log('Hello '+ friend + "!");
});
// Remember the example below woll not work, forEach always returns undefined.
var uppercaseFriends = 
friends.map(function(friend){
  return friend.toUpperCase();
});
console.log(uppercaseFriends);


// We can use Map:
// ===============================================
var uppercaseFriends = [];
friends.forEach(function(friend){
  uppercaseFriends.push(friend.toUpperCase());
});
console.log(uppercaseFriends);
        // or
var uppercaseFriends = 
friends.map(function(friend){
  return friend.toUpperCase();
});
console.log(uppercaseFriends);

//Map allows us to alter and return a new array that the method was called upon:
var uppercaseFriends = friends.map(function(friend){
  console.log(friend);
  return friend.toUpperCase();
});
console.log(uppercaseFriends);
console.log(friends);

var doubleNumbers = [2,4,6].map(function(number){
 return number * 2;
});

console.log(doubleNumbers);


//FILTER 
//=======================================================================
var evenLengthFriends = 
friends.filter(function(friend){
  return friend.length %2 === 0;
});
console.log(evenLengthFriends);

var oddLengthFriends = friends.filter(function(friend){
  return friend.length %2 !==0;
});
console.log(oddLengthFriends);

//REDUCE
//=======================================================================
var nums = [1,2,3,4];

//inline syntax
var sum = nums.reduce(function(previousValue, currentValue){
 console.log('previous value:', previousValue, 'current value:', currentValue);
  return currentValue + previousValue;
});
console.log(sum);
//callback syntax
var add = function(a,b){
  return a+b;
};

var sum = nums.reduce(add);
console.log('sum: ', sum);


// SOME - Run through the array, and return true if at least one element returns true
//========================================================================
var nums = [1,5,3];
var isOdd = nums.some(function(number){
  return number % 2 === 0;
});

console.log(isOdd);
//false


