/*
  Variables in JavaScript

  Unlike in Java, variables in JavaScript are not
  strongly typed. Rather, they are dynamically typed
  or "duck" typed. We use the var keyword to declare a variable.
*/

var float = 5.1234;         // a floating point variable
var integer = 5;            // an integer variable
var array1 = [1,2,3,4,5];   // an array variable
var string = "Hello";       // a string variable

// an array of strings

var array = [
  "blue",
  "orange",
  "green",
  "yellow",
  "red"
];

/*
  Functions/methods in JavaScript

  Unlike in Java, we do not need to declare a return type
  or declare a visiblity, like "private" or "public".
  Instead, we use the function keyword to declare a function.
*/

function sayHello(name) {
  console.log("Hello there, " + name + "!");
}

/*
  Debugging in JavaScript

  In browser-based JavaScript, we can use the console
  object

array.forEach(function(color){
  var node = document.createElement('li');
  var textnode = document.createTextNode(color);
  node.appendChild(textnode);

  document.getElementById('colors-list').appendChild(node);
});

var daniel = {
  name: "Daniel",
  lastname: "DeKerlegand"
};

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

var person1 = new Person("Susan", "Smith", 47, "brown");

for (prop in person1) {
  console.log(prop);
}
