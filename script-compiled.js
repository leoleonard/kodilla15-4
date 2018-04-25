"use strict";

// zadanie 1

var one = ["Hello "];
var two = [].concat(one, ["World"]);
console.log(two);

var hello = "Hello";
console.log(hello + " World!");

var hey = "Hello";
var world = "World!";
console.log(hey + " " + world);

// zadanie 2

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
console.log(multiply(5, 6));

var square = function square(a) {
  return a * a;
};
console.log(square(5));

// zadanie 3

var average = function average() {
  for (var _len = arguments.length, num = Array(_len), _key = 0; _key < _len; _key++) {
    num[_key] = arguments[_key];
  }

  return num.reduce(function (a, b) {
    return a + b;
  }) / num.length;
};
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

// zadanie 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var averageGrades = function () {
  for (var _len2 = arguments.length, num = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    num[_key2] = arguments[_key2];
  }

  return num.reduce(function (a, b) {
    return a + b;
  });
}.apply(undefined, grades) / grades.length;
console.log(averageGrades);

// zadanie 5

var names = ['Jan', 'Zosia', 'Zbyszek', 'Kacper', 'Tomek', 'Magda'];
var first = names[0],
    second = names[1],
    fourth = names[3]; // puste miejsce pomiędzy second a fourth
// first = 'Jan', second = 'Zosia', fourth = 'Kacper'

var dane = [1, 4, 'Iwona', false, 'Nowak', 'rzeka'];
var third = dane[2],
    fifth = dane[4];

console.log(third, fifth);
