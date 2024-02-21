// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function removeLetters(str, charsToRemove) {
    for (const char of charsToRemove) {
        str = str.split(char).join('');
    }
    return str;
}


let inputString = prompt("Введіть рядок:");
let charsToRemove = prompt("Введіть символи для видалення через кому:").split(',');


console.log("Результат:", removeLetters(inputString, charsToRemove));