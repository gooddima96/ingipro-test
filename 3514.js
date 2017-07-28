/*
3514
Найти число, повторяющееся нечетное количество раз
*/

'use strict';

const array1 = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]; // 5
const array2 = [1,1,2,-2,5,2,4,4,-1,-2,5]; // -1

function findUneven(array) {
    let result = [];
    let obj = {};

    for (let i in array) {
        obj[array[i]] = (isNaN(obj[array[i]])) ? 1 : obj[array[i]] + 1;
    }
    for (let key in obj) {
        //console.log(key, ':', obj[key]);
        if (obj[key] % 2) {
            result.push(Number(key));
        }
    }
    return (result.length <= 1) ? result[0] : result;
}

console.log(findUneven(array1));
console.log(findUneven(array2));
