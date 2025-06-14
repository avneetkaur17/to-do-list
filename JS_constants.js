// const = a variable that can't be changed 

const PI = 3.14159;     // we use uppercase using when constants are equal to numbers and not when it is a string
let radius;
let circumference;

radius = window.prompt("Enter radius: ");
radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference);