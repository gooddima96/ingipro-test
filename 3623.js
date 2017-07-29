/*
3623
Напишите код, который сделает из массива объект

на входе массив
var arr = [
 {name: 'width', value: 10},
 {name: 'height', value: 20}
];
на выходе объект {width: 10, height: 20}
*/

'use strict';

const arr = [
    {name: 'width', value: 10},
    {name: 'height', value: 20},
];

function arrToObj(array) {
    let result = {};
    array.forEach((item) => {result[item.name] = item.value;});
    return result;
}

console.log(arrToObj(arr));
