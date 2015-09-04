var friends = [
                'Moe', 
                'Larry', 
                'Curly',
                'Jane',
                'Emma',
                'Elizabeth',
                'Elinor',
                'Mary',
                'Darcy',
                'Grey',
                'Lydia',
                'Harriet'
              ];

console.log(friends[friends.length-1]);
friends.push('James');
console.log(friends);

friends.unshift('Another Name');
console.log(friends);

friends[friends.indexOf('Elizabeth')] = 'Liz';
                OR
friends.splice(friends.indexOf('Elizabeth'), 1, 'Liz');

console.log(friends);

friends = friends.sort();

console.log(friends);

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

function compareNumbers(a, b){return a - b;}

ages = ages.sort(compareNumbers);

console.log(ages[Math.floor(ages.length/2)]);

var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet";

friends = friends.split(",").sort().reverse()

console.log(friends)

// var JohnsInfo = {
//  Firstname : 'John',
//  Surname: 'Doe',
//  Age: '36',
//  Address: '1234 Park St.'
// };

// JohnsInfo.Address = '1234 Park Ln.'

// console.log(JohnsInfo)

// h = {0: "Zero", 1: "One", two: "Two", three: 3}
// h[1]

// is = {true: "It's true!", false: "It's false"}
// What is the return value of is[2 + 2 == 4]?
// What is the return value of is["Erik" == "Jonathan"]?
// What is the return value of is[9 > 10]?
// What is the return value of is[0]?
// What is the return value of is["Erik"]?

//   Moe, Doe, 31, 1234 Park st.
//   Larry, Doe, 36, 1234 Spark st.
//   Curly, Doe, 36, 1239 Park st.
//   Jane, Doe, 32, 1239 Spark st.
//   Emma, Doe, 34, 1235 Spark st.
//   Elizabeth, Doe, 36, 1234 Park st.
//   Elinor, Doe, 35, 1230 Park st.
//   Mary, Doe, 31, 1231 Park st.
//   Darcy, Doe, 32, 1224 Park st.
//   Grey, Doe, 34, 1214 Park st.
//   Lydia, Doe, 30, 1294 Park st.
//   Harriet, Doe, 32, 1324 Park st.


// var InfoBySurname = {
//   Doe  : {
//     Firstname : 'Moe',
//     Age: 31,
//     Address: '1234 Park st.'
// }

users = {
  "Jonathan":{
    twitter: "tronathan",
    favorite_numbers:[12, 42, 75],
  },
  "Erik":{
    twitter: "sferik",
    favorite_numbers: [8, 12, 24]
  },
  "Anil": {
    twitter: "bridgpal",
    favorite_numbers: [12, 14, 85]
  }
}



// How would you return the smallest of Erik's favorite numbers?
users.Erik.favorite_numbers.sort(function(a, b){return a - b;})[0];
// How would you return an array of Anil's favorite numbers that are also even?
// How would you return an array of the favorite numbers common to all users?
// How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

var food = 'Banana'

switch(food){
  case'Banana':
  console.log('Bananas are awesome')
  break;
  case'apple':
  console.log('Apples for the win')
  break;
  default: 
  console.log('Food sucks')
  }


  var a = ['bob', 'mary', 'george']

a.forEach(function(currentValue, index){
    console.log("I want a " + currentValue);
    console.log(a[index]);
  });

  a.forEach(function(currentValue, index, array){ // you need these for access below few lines.
    console.log("I want a " + currentValue);
    console.log(array[index]);
  });

