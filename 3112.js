/*
3112
Написать функцию, удаляющую элемент из массива по индексу
*/

'use strict';

const arr = [1, 2, 3, 4, 5];

function drop(arr, i) {
    const arrCopy = arr.slice();
    arrCopy.splice(i, 1);
    return arrCopy;
}

console.log(drop(arr, 3)); // [1, 2, 3, 5]
