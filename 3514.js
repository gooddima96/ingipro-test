/*
3514
Найти число, повторяющееся нечетное количество раз
*/

'use strict';

const array1 = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]; // 5
const array2 = [1,1,2,-2,5,2,4,4,-1,-2,5]; // -1

function findUneven(array) {
    const obj = {};

    for (let i in array) {
        obj[array[i]] = (isNaN(obj[array[i]])) ? 1 : obj[array[i]] + 1;
    }
    for (let key in obj) {
        //console.log(key, ':', obj[key]);
        if (obj[key] % 2) {
            return Number(key);
        }
    }
}

console.log(findUneven(array1));
console.log(findUneven(array2));
