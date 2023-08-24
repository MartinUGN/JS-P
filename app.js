// document.write("<h1>Hola mundo</h1>");
// console.log([1,2,3,4,5,6,7])
// console.log({"user": "lola", "age":4})

// var nombredelusuario= "Juan";

// nombredelusuario ="Luis"

// const pi= 10

// console.log(pi)




// let numberOne = 100;
// let numberTwo = 500;

// let name = "Carlos";
// let lastname = "Garcia";

// let completeName = name + ' '+ lastname;


// let result = numberOne != numberTwo;

// let passwordDB = 'wanrltw';

// let input = 'wanrlt';

// let result = input == passwordDB;

// if (result == true){
//  console.log('Cuenta correcta')
// }else{
//     console.log('Contraseña incorrecta')
// }


// console.log(result);


// let score = 70;

// if(score > 30 ){
//     console.log("necesitas practicar más")
// }else if(score > 15){
//     console.lo('estas mejorando')
// }else{
//     console.log('sigue mejorando')
// }


// let typeCard = 'Credit ';

// switch (typeCard){
//     case 'Debid Card':
//         console.log ('Esta es una tarjeta de debito')
//         break;

//         case 'Credit Card':
//         console.log ('Esta es una tarjeta de credito')
//         break;

//         default:
//             console.log('No tienes tarjeta');

// }

// let count = 1;

// while (count <= 50){
//     console.log(count)
//     count++;

// }

// let names = [1,2,3,4]

// for(let i = names.length -1; i >= 0; i--){
//     console.log('Hola '+ names[i]);
// }

// function saludar(name){
//     console.log('Hola ' + name);
// }

// saludar('Magaly');
// saludar ('Martin');
// saludar ('Uriel');



// function add (n1, n2){
//     console.log (n1 + n2)
// }

// add (3,2);
// add (100, 10);

// const myArr = ['Kolade', 'Chelsea', 10, true];

// console.log(myArr);
// console.table(myArr);

// const myObj = {
//     name: 'Kolade',
//     luckyNum: 10,
//     lovesFootball: true,
//   };
  
//   console.log(myObj);
//   console.table(myObj);


// const name = 'John Doe';
// const age = 20;

// const plusConcat =
//   'Hi there 👋🏽 \nMy name is ' + name + ' and I am ' + age + ' years old.';

// const templateLiteralConcat = `Hi there 👋🏽 \nMy name is, ${name} and I am ${age} years old.`;

// console.log(plusConcat)
// console.log(templateLiteralConcat)

// const myNum = '5';

// convertNum1 = +myNum;
// convertNum2 = Number(myNum);

// console.log(convertNum1, typeof convertNum1); // 5 'number'
// console.log(convertNum2, typeof convertNum2); // 5 'number'

// declare multiple variables at once.
// let x, y, z;

// x = 1;
// y = 2;
// z = 3;

// console.log(x, y, z); // 1, 2, 3

// // declare other variables after the first one without the keyword.
// const a = 'Hello',
//   b = 'How are you today?',
//   c = 'Are you coding today?';

// console.log(a); // Hello
// console.log(b); // How are you today?
// console.log(c); // Are you coding today?

// console.group('Bio:');

// console.log('My name is Kolade');
// console.warn("I don't like to be late");
// console.error('You came late');

// console.groupEnd();


// const styles = `padding: 15px;
//                 background-color: #2ecc71;
//                 color: black`;

// console.log('%c Hello, Everyone!', styles);

// Math.floor(Math.random() * 100 + 1)


// let x;

// Get the square root of a number
// x = Math.sqrt(9);

// // convert a number to absolute value
// x = Math.abs(-5); // 5

// // Round up a number to the nearest whole number
// x = Math.round(3.2);

// // Round up a number
// x = Math.ceil(4.1); // 5

// // Round down a number
// x = Math.floor(4.6); // 4

// // Exponent of a number
// x = Math.pow(5,3); // 8

// // Get the minimum number
// x = Math.min(4, 5, 3,2,1,2,3,4,5,6,7,8,9); // 3

// // Get the maximum number
// x = Math.max(4, 5, 3); // 5

// // Get a random number/decimal between 0 and 1
// x = Math.random();

// // Get a random number between 1 and 200
// x = Math.floor(Math.random() * 200 ); // any number between and 200

// console.log(x);


// const str = 'john';
// const capitalizedStr = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// console.log(capitalizedStr(str)); // John
// console.log(capitalizedStr('doe')); // Doe

// // Destructuring without default values
// const fruits = ['Apple', 'Banana'];
// const [firstFruit, secondFruit, thirdFruit] = fruits;

// console.log(firstFruit); // Apple
// console.log(secondFruit); // Banana
// console.log(thirdFruit); // undefined

// // Destructuring with default values
// const [fruit1, fruit2, fruit3 = 'Orange'] = fruits;

// console.log(fruit1); // Apple
// console.log(fruit2); // Banana
// console.log(fruit3); // Orange


// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray];

// console.log(copiedArray); // [1, 2, 3]

// // merge two or more arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const mergedArray = [...arr1, ...arr2];

// console.log(mergedArray); // [1, 2, 3, 4, 5, 6


// const message = 'Hello world';

// console.log(message.startsWith('H')); // true
// console.log(message.startsWith('h')); // false
// console.log(message.endsWith('d')); // true
// console.log(message.endsWith('D')); // false


const greet = '   Hello world!   ';
console.log(greet.trim());
// Hello world!

const greet2 = '   Hello world!   ';
console.log(greet2.trimStart());
// Output: 'Hello, world!   '

const text = '   Hello world!   ';
console.log(text.trimEnd());
// Output: '   Hello world!'

const input = '   ';
if (input.trim() === '') {
  console.log('The input is empty but has whitespace characters.');
} else {
  console.log('The input contains non-whitespace characters.');
}

// Output: The input is empty but has whitespace characters.


const fechaIngresoString = "2023-08-19";
const fechaIngreso = parseDate(fechaIngresoString);

console.log(fechaIngreso); 