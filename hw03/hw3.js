// 1)Порівняння трьох чисел:


let number1 = Number(prompt('Введите число 1'));
let number2 = Number(prompt('Введите число 2'));
let number3 = Number(prompt('Введите число 3'));
if(number1>number2 && number1>number3){
console.log(`${number1}' - наибольшее число`);
}
else if(number2>number1 && number2>number3){
    console.log(`${number2}' - наибольшее число`);
    }
else{
    console.log(`${number3}' - наибольшее число`);
    }
    

//     2) Визначення сезону:
//      (Варіант 1)

let monthNumber = Number(prompt('Введите номер месяца (от 1 до 12)'));
if(monthNumber>=1 && monthNumber<=2){
    console.log(`Это зимний месяц`);
}
else if(monthNumber<=5){
    console.log(`Это весенний месяц`);
}
else if(monthNumber<=8){
    console.log(`Это летний месяц`);
}
else if(monthNumber<=11){
    console.log(`Это осенний месяц`);
}  
else if(monthNumber=12){
    console.log(`Это зимний месяц`);
}
else{
    console.log(`Введите правильный номер месяца`);
}

// 2) Визначення сезону:
//      (Варіант 2)

let monthNumber = Number(prompt('Enter month number (from 1 till 12)'));
let seson;
season = (monthNumber<=2 && monthNumber>=1)? "winter":
         (monthNumber<=5)? "spring":
         (monthNumber<=8)? "summer" :
         (monthNumber<=11)? "autumn" : "Enter correct number";
         console.log(season);

// 4) Перевірка величини кута:
let angleDegree = Number(prompt('Введіть величину кута (в градусах)'));
let result;

result = (angleDegree>90) ? "Кут тупий" :
         (angleDegree<90) ? "Кут гострий" : "Кут прямий";
console.log(result);

// 5) Визначення типу геометричної фігури за допомогою switch:


let figureName = "коло";

switch(figureName){
    case "коло" :
    case "Коло" :
    console.log(`Коло має 0 сторін.`);
    break;

    case "квадрат" :
    case "Квадрат" :
    console.log(`Квадрат має 4 сторони.`);
    break;

    case "трикутник" :
    case "Трикутник" :
    console.log(`Трикутник має 3 сторони.`);
    break;

   default:
    console.log(`Немає інформації.`);
}

// 6) Підрахунок суми парних чисел:


let whileCounter = 1;
let sum = 0;
while(whileCounter<20){
    whileCounter+=2;
    sum += whileCounter;
}
console.log(`Sum = ${sum}`);

// 7) Таблиця множення:


let number = 5;
for (let i=0; i<=10; i++){
    console.log(`${number} x ${i} = ${number*i}`);
}