// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function calculateAverage(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i];
            count++;
        }
    }
    return sum / count;
}

const arr = [1, 2, 'a', 'dog', 3, 'c', 4, true, 7, 10, 'cat'];
console.log(calculateAverage(arr));