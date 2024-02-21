// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.


function fillArray(rows, columns) {
    let array = [];

    for (let i = 0; i < rows; i++) {
        let innerArray = [];

        for (let j = 0; j < columns; j++) {
            let element = prompt(`Введіть значення для елементу [${i}][${j}]:`);
            innerArray.push(element);
        }

        array.push(innerArray);
    }
    return array;
}


let rows = parseInt(prompt("Введіть кількість рядків:"));
let columns = parseInt(prompt("Введіть кількість стовпців:"));


let userArray = fillArray(rows, columns);


console.log("Двовимірний масив, заповнений даними користувача:");
console.log(userArray);