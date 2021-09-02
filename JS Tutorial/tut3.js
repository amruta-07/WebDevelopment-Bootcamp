//type conversion and type coercion
console.log("Welcome to tut3");
let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));

let stri;
stri = String(true);
//stri = number(false);
console.log(stri, (typeof stri));

// let date =  (new Date());
// console.log(date);

let date = String(new Date());
console.log(date,(typeof date));

// let i = 7;
// console.log (i.toString());

let i = Number("379");
console.log (i, (typeof i));parseFloat

let number = parseFloat('24.745');
console.log(number.toFixed(2),(typeof number));










