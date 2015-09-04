var person1 = {
  name: 'Joe Bloggs',
  hair: 'blonde',
  lungs: true,
  talk:function(){
  console.log('yo');
  }
};

person1.name
//"Joe Bloggs"
person1.talk()
// "yo"

var person2 = {
  name: 'Sam Jones',
  hair: 'black',
  lungs: true,
  talk:function(){
  console.log('happy Monday!');
  }
};

person2.hair
//"black"
person2.talk
// 'happy Monday!'

var personFactory = function(name, hairColor) {
  return {
    name: name,
    hairColor: hairColor,
    talk: function() {
      console.log('hello thar! My name is '+ this.name);
    }
  }
}

var person3 = personFactory('John Bailey', 'brown');
person3
//Object {name: "John Bailey", hairColor: "brown"}

var person4 = personFactory('Sam Smith', 'orange');
person4
//Object {name: "Sam Smith", hairColor: "orange"}
    // hairColor: orange
    // name: Sam Smith
    // talk: function ()
    // __proto__: Object

person3.talk();
// 'hello thar! My name is John Bailey'

var carFactory = function(brand, color, destination) {
  return {
    brand: brand,
    color: color,
    destination: destination,
    drive: function() {
      console.log("brum brum I'm going to "+this.destination);
    }
  };
};
var Car1 = carFactory('Ford', 'Blue', 'France');
var Car2 = carFactory('Vauxhall', 'Silver');
Car1.drive1();
// brum brum I'm going to France
Car2.drive();
// brum brum I'm going to undefined

Object.getPrototypeOf(Car2);
// Object {}
Object.getPrototypeOf('Mathilda');
// String

function Rabbit(type){
  this.type = type;
}
var killerRabbbit = new Rabbit('killer');
var happyRabbit = new Rabbit('happy');
happyRabbit
//Rabbit {type: "happy"}
killerRabbbit
//Rabbit {type: "killer"}
killerRabbbit.type;
//'killer'
Rabbit.prototype
// Rabbit {}
//  constructor: function Rabbit(type)
//  __proto__: Object
killerRabbbit.name = "John"
killerRabbbit
//Rabbit {type: "killer", name:"John"}
killerRabbbit.kill = function() {
  console.log('I am gonna kill ya');
}

function Person(name, hairColor, eyeColor){
 this.lungs = true;
 this.hairColor = hairColor;
 this.eyeColor = eyeColor;
 this.name = name;
 this.speak = function(){
   conole.log('hello I am ' + this.name);
 };
};

var person2 = new Person('Sophie Jones', 'brown', 'blue');
person2

Person.prototype.speak = function(){
  console.log('hello I am ' + this.name);
};
// adding function speak to protoype.

Person.prototype.num_of_eyes = 2;
// adding property to protoype.

delete Person.prototype.num_of_eyes

// removes property from protoype
