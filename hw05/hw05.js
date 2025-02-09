// Домашня робота:
// push:
// Завдання 1: Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).
let furniture = ["chair", "table", "mirror", "bed"];
furniture.push("armchair");
furniture.push("wardrobe");
furniture.push(2);
furniture.push(10);
console.log(furniture);

// Завдання 2: Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.
function elementAddition(array, element){
    array.push(element);
    console.log(array);
}
elementAddition(furniture,"lamp");

// pop:
// Завдання 1: Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.
let fruits = ["apple", "pear", "banana", "peach"];
fruits.pop();
console.log(fruits);

// Завдання 2: Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.
function elementDelete(array){
    array.pop;
    console.log(array);
}
elementDelete(fruits);

// unshift:
// Завдання 1: Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.
let flowers = ["rose", "poppy", "daisy", "tulip"];
flowers.unshift("carnation");
console.log(flowers);

// Завдання 2: Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.
function elementPlus(array, element){
    array.unshift(element);
    console.log(array);
}
elementPlus(flowers,"lily");

// shift:
// Завдання 1: Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.
let numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.shift();
console.log(numbers);

// Завдання 2: Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.
function elementMinus(array, element){
    array.shift();
    console.log(array);
}
elementMinus(numbers);

// fill:
// Завдання 1: Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.
let table = new Array(20);
table.fill(3);
console.log(table);

// Завдання 2: Напишіть функцію, яка приймає масив, значення та індекси, і використовує fill для заповнення масиву 
// зазначеними значеннями на зазначених позиціях.
function arrayFill(array, value, index){
    array.fill(value,index);
    console.log(array);
}
arrayFill(table,"+",8);

// splice:
// Завдання 1: Створіть масив і використайте метод splice, щоб видалити кілька елементів з середини масиву.
let animals = ["dog", "cat", "rabbit", "lion"];
animals.splice(1,2);
console.log(animals);


// Завдання 2: Напишіть функцію, яка приймає масив, індекс та кількість елементів, і використовує splice для видалення елементів з масиву.
function deleteElement(array,index,elementNumber){
    array.splice(index,elementNumber);
    console.log(array);
}
deleteElement(animals,0,1);


// reverse:
// Завдання 1: Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.
let writers = ["Dickens", 'Scott', "Tolstoy", "London"];
writers.reverse();
console.log(writers);

// Завдання 2: Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.
function reverseFn (array){
    array.reverse();
    console.log(array);
}
reverseFn(writers);

// concat:
// Завдання 1: Створіть два масиви і використайте метод concat, щоб об'єднати їх в один новий масив.
let birds = ["sparrow", "swan", "dough"];
let animals2 = ["tiger", "bear", "hedgehog", "fox"];
allAnimals = birds.concat(animals2,"mouse","wolf");
console.log(allAnimals);

// Завдання 2: Напишіть функцію, яка приймає два масиви і використовує concat для об'єднання їх в новий масив.
function uniteArray(array1, array2){
    array = array1.concat(array2);
console.log(array);
}
uniteArray(birds, animals2);

// includes:
// Завдання 1: Створіть масив і використайте метод includes, щоб перевірити, чи масив містить певний елемент.
let phones = ["iPhone", "Samsung", "Xiaomi", "Nokia"];
console.log(phones.includes("Samsung"));
console.log(phones.includes("Lenovo"));

// Завдання 2: Напишіть функцію, яка приймає масив і елемент, і використовує includes для перевірки наявності цього елемента в масиві.
function findPhone(array,element){
    console.log(array.includes(element));
}
findPhone(phones,"Nokia");

// filter:
// Завдання 1: Створіть масив чисел і використайте метод filter, щоб створити новий масив, що містить лише парні числа.
let myNumbers = [3,4,5,6,7,8,9,20,25,36,78,91];
let evenNumbers = myNumbers.filter(elem => elem%2===0);
console.log(evenNumbers);

// Завдання 2: Напишіть функцію, яка приймає масив і функцію-умову, і використовує filter для створення нового масиву, що містить елементи,
//  які задовольняють умову.
function evenNumbersFn (array, condition){
    return array.filter(condition);
} 
evenNumbers1 = num => num%2===0;
let evenNumbersRes = evenNumbersFn(myNumbers, evenNumbers1);
console.log(evenNumbers);
// map:
// Завдання 1: Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.
let oldArray = [8,12,6,15,10];
let newArray = oldArray.map(num => num**2); 
// => {
//     for (i=0; i<oldArray.length; i++){
//         console.log(array[i] = array[i]**2);    }
// }
console.log(newArray);

// Завдання 2: Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, 
// в якому кожен елемент отримує стрінг до значення

function addString(array,transformer){
    return array.map(item => String(transformer(item)));
}
let transformArray = num => num**2;
let stringArray = addString(oldArray,transformArray);
console.log(stringArray);