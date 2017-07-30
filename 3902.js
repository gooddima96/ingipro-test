/*
3902
Реализовать функцию sum()
*/

'use strict';

function sum(firstArg) {
    let currentSum = firstArg;
    function f(newArg) {
        currentSum += newArg;
        return f;
    }
    f.toString = () => currentSum;
    return f;
}
//
console.log('Результат: ' + sum(1)); // => 1
console.log('Результат: ' + sum(1)(2)); // => 3
console.log('Результат: ' + sum(1)(2)(3)); // => 6
