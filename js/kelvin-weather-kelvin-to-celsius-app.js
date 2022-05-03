// Todays current Temp
const kelvin = 293
// Celsius Calc
celsius = kelvin - 273;
//How to convert temp
let fahrenheit = celsius * (9/5) + 32;
// Rounding
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);