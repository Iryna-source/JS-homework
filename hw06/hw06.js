// 1 Створення класу та об'єкта:

// Створіть клас Person з властивостями name та age.
// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.
class Person {
    constructor (name, age){
        this._name = name;
        this._age = age;
   
}
}
let firstPerson = new Person ("John", 30);
console.log(firstPerson);


// 2 Методи класу:

// Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи.

class Person1 {
    constructor (name, age){
        this._name = name;
        this._age = age;
    }
    sayHello(){
        console.log(`Привіт ${this._name}!`);
    }
}

let firstPerson1 = new Person1 ("Jack", 25);
firstPerson1.sayHello();


// 3 Наслідування:

// Створіть клас Student, який наслідує від класу Person.
// Додайте властивість studentId до класу Student.
// Додайте метод study, який виводить повідомлення про вивчення студентом.

class Student extends Person{
    constructor (name,age,studentId){
        super(name,age);
        this._studentId = studentId;
    }
    study(){
        console.log (`Студент ${this._name}, ${this._age}, ${this._studentId} вивчає хімію`);
    }
}
let firstStudent = new Student ("Jack", 19, 923546);
firstStudent.study();

// Переишіть цей код використовуючи let const~
// // Замість var
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

for (let i = 0; i < 5; i++) {
        console.log(i);
    }

// // Замість var
// var message = 'test';
// function example() {
//     if (true) {
//         var message = 'Hello, world!';
//         console.log(message);
//     }
//     console.log(message); // Виведе 'Hello, world!'
// }

const message = 'test';
function example() {
    if (true) {
        let message = 'Hello, world!';
        console.log(message);
    }
    console.log(message); 


// Використовуючи for in  виведіть значення з обєктку в console.log
// const person = {
//     name: 'John',
//     age: 25,
//     occupation: 'Developer'
// };

const person = {
        name: 'John',
        age: 25,
        occupation: 'Developer'
    };

    for (const key in person) {
        console.log(person[key]);
    }

// Використовуючи for of  та for in  виведіть занчення з обєктів які знаходяться в масиві
// const students = [
//     { name: 'Alice', age: 20, grade: 'A' },
//     { name: 'Bob', age: 22, grade: 'B' },
//     { name: 'Charlie', age: 21, grade: 'C' }
// ];

const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];
for (const student of students){
    for (const key in student) {
        console.log (`${key}: ${student[key]}`);
    }
    console.log("-----");
} 
// Створіть функцію, яка повертає рік народження користувача коли користувач вводить свій вік
// Виведіть результат у консоль.
function getBirthYear(age) {
    const currentYear = new Date().getFullYear();
    return currentYear-age;
}
const userAge = number(prompt("Введіть свій вік"));
console.log (`Ваш рік народження: ${getBirthYear(userAge)}`);  



