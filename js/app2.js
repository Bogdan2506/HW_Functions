// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
    let result;

    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            result = "Невідома операція";
            break;
    }

    return result;
}

let x = parseInt(prompt("Введіть перше число:"));
let znak = prompt("Введіть математичний знак (+, -, *, /, %, ^):");
let y = parseInt(prompt("Введіть друге число:"));

console.log("Результат:", doMath(x, znak, y));