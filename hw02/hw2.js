// математичні операції

let result1 = (5 + 3) * 2 - 7;
console.log(result1);

let result2 = (10 / 2) ** 2;
console.log(result2);

let result3 = 2 * (4 + 3) - (8 / 2);
console.log(result3);

let result4 = (15 % 4) + 5;
console.log(result4);

let result5 = 3 - (2 ** 4);
console.log(result4);

let firstNumber = 3;
let secondNumber = -5;
console.log(`+ operation: ${+firstNumber + +secondNumber}`);
console.log(`- operation: ${firstNumber - secondNumber}`);
console.log(`* multiplication: ${firstNumber*secondNumber}`);
console.log(`/ division: ${firstNumber/secondNumber}`);
console.log(`% remainder: ${firstNumber%secondNumber}`);
console.log(`** exponentiation ${firstNumber**secondNumber}`);

// 1. Логічні порівняння та alert:

let number1 = 8;
let number2 = -1;

console.log(`Compare result 'number1' and 'number2' ${'number1' == 'number2'}`);
console.log(`Compare result 'number1' and 'number2' ${'number1' === 'number2'}`);
console.log(`Compare result 'number1' and 'number2' ${'number1' > 'number2'}`);
console.log(`Compare result 'number1' and 'number2' ${'number1' < 'number2'}`);
console.log(`Compare result 'number1' and 'number2' ${'number1' >= 'number2'}`);
console.log(`Compare result 'number1' and 'number2' ${'number1' <= 'number2'}`);

alert(`Результат порівняння 'number1' і 'number2': ${'number1' == 'number2'}`);

// 2.Метод вводу інформації та логічні порівняння:

let userNumber = Number(prompt('Enter number'));
let checkNumber = 'Це число є парним? ${userNumber%2 === 0}';
console.log(checkNumber);

// 3. логічні порівняння та введення-виведення:

let promptResult = (prompt('Введіть свій вік (цифрами)'));
let checkResult = promptResult >= 18;
alert(`Ви можете використовувати ресурс ${checkResult}`);

// 4. Розрахунок вартості товару та console.log

let productPrice = Number (prompt ('Enter product price'));
let productNumber = Number (prompt('Enter product number'));
let totalPrice = productPrice * productNumber;
console.log(`Total price: ${totalPrice}`); 

// 5. Розрахунок знижки на товар та alert:

let ProductPrice = Number (prompt ('Enter product price'));
let discountPrice = ProductPrice / 2;
alert(`Discount price: ${discountPrice}`);
