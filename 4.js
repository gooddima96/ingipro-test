/*
4
Написать функцию, которая возвращает сумму указанных чисел и всех чисел между ними. Шаг равен 1.
Первое число необязательно наименьшее
*/

'use strict';

function sumAll(arr) {
    let result = 0;
    const sortCopy = arr.slice().sort((a, b) => a - b);

    for (let i = sortCopy[0]; i <= sortCopy[sortCopy.length - 1]; i++) {
        result += i;
    }

    return result;
}

console.log(sumAll([1, 4])); // 10 (1+2+3+4)
console.log(sumAll([10, 5])); // 45 (10+9+8+7+6+5)
