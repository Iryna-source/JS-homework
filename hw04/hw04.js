// 1 Калькулятор 

function calculator (number1, number2, operator){
 
switch(operator){
    case '-' :
        return (`Результат віднімання: ${number1-number2}`);
    case "+" :
        return (`Результат складання: ${number1+number2}`);
    case "/" :
        return (`Результат ділення: ${number1/number2}`);   
    case "*" :
        return (`Результат множення: ${number1*number2}`);
}
}

console.log (calculator (8,4,"+"));
console.log (calculator (8,4,"-"));
console.log (calculator (8,4,"/"));
console.log (calculator (8,4,"*"));

// 2 Параметри та колбеки:



function hiUser(userName){
    console.log(`Вітаю, ${userName}`);
}
let users = ['Anna', 'Taras', 'Grygoriy', 'Natalia', 'Admin'];


function wellcomUser(users, callBackFn){
    for (let i = 0; i<users.length; i++){
        hiUser(array[i]);  
}
}
    wellcomUser(users);
    wellcomUser('Anna', 'Test!', 'UserLogins');




// 3 Знаходження першого парного числа:


    for (let i=1; i<=10; i++){
        if (i%2===0){
            console.log('Перше парне число:', i);
            break;
        }
}

// 4 Виведення парних чисел:


for (let i=1; i<=10; i++){
    if (i%2===1){
        continue;
    }  
    else{
        console.log(i);
    }
}
