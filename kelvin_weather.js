//Kelvin temperature//
const kelvin = 293;
//Celsius temperature//
const celsius = kelvin - 273;
//Fahrenheit temperature//
let Fahrenheit = celsius * (9 / 5) + 32;
//Round down Fahrenheit temperature//
var fahrenheit = Math.floor(Fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
