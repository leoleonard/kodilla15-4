// zadanie 1

const one = ["Hello "];
const two = [...one, "World"];
console.log(two);

const hello = "Hello";
console.log(`${hello} World!`);


const hey = "Hello";
const world = "World!";
console.log(`${hey} ${world}`)


// zadanie 2

const multiply = (a, b = 1) => a * b;
console.log(multiply(5, 6));

let square = a => a * a;
console.log(square(5));

// zadanie 3

const average = (...num) => num.reduce((a,b) => a+b)/num.length
console.log(average(1,3));
console.log(average(1, 3, 6, 6));

// zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
const averageGrades = ((...num) => num.reduce((a,b) => a+b))(...grades)/grades.length
console.log(averageGrades);

// zadanie 5

const names = ['Jan', 'Zosia', 'Zbyszek', 'Kacper', 'Tomek', 'Magda'];
const [first, second, , fourth] = names; // puste miejsce pomiędzy second a fourth
// first = 'Jan', second = 'Zosia', fourth = 'Kacper'

const dane = [1, 4, 'Iwona', false, 'Nowak', 'rzeka'];
const [, ,third, , fifth] = dane;
console.log(third, fifth);
