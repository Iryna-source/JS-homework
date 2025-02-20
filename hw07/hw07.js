// Використовуючи стрінгові методи  а також Маth напишіть код для функціоналу гри ( Камінь ножиці папір)


function getComputerChoice(){
const choices = ["камінь", "ножиці", "папір"];
return choices [Math.floor(Math.random()*2)];
}

function determineWinner (playerChoice, computerChoice){
if (playerChoice === computerChoice){
console.log(`Нічия. Обидва вибрали ${playerChoice}`);
}
else if (
    (playerChoice === "камінь" && computerChoice === "ножиці") ||
    (playerChoice === "ножиці" && computerChoice === "папір") ||
    (playerChoice === "папір" && computerChoice === "камінь"))
{
console.log(`Ви виграли! ${playerChoice} б'є ${computerChoice}.`);
}
else {
    console.log(`Ви програли! ${computerChoice} б'є ${playerChoice}.`);

}
}

function playGame() {
    let playerChoice = prompt("Введіть один з елементів гри (камінь, ножиці, папір)").trim().toLowerCase();
    let computerChoice = getComputerChoice();
    console.log(determineWinner(playerChoice, computerChoice));
}

playGame();


// Напишіть функцію, яка перевіряє тип змінної та виводить повідомлення "Це число", "Це рядок" або "Це інший тип", використовуючи оператор typeof.

function typeInfo(arg){
if(typeof arg === "string"){
    console.log ("Це рядок");
}
else if(typeof arg == "number"){
    console.log("Це число");
}
else{
    console.log("Це інший тип");  
}
}
typeInfo("Ten");


// Напишіть функцію, яка приймає будь-яку кількість числових аргументів та обчислює їх середнє значення за допомогою оператора Rest.

let sum=0;
function averageFn (...numbers){
    for (let number of numbers){
        sum += number;
    }
    console.log (`Середнє значення дорівнює: ${sum/numbers.length}`);
}
averageFn (2,4,6,8);


// Створіть html за ціми js селекторами
// document.querySelectorAll('ul.nav > li')
let listElements = document.querySelectorAll('ul.nav > li');
console.log(listElements);

// document.querySelector('li:nth-child(2)')
let secondItem = document.querySelector('li:nth-child(2)');
console.log(secondItem);

// document.querySelector('header nav a')
let firstLink = document.querySelector('header nav a');
console.log(firstLink);

