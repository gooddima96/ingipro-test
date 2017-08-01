/*
3589
Нужно написать функцию range() аналогичную тому что есть в python.
Cигнатура: range(stop) range(start, stop, [step=1])
для упрощения start,stop, step - integer
*/

'use strict';

function range(start = 0, stop, step = 1) {
    const result = [];

    if (step < 1) {
        throw new Error('Invalid step');
    }
    if (!stop) {
        stop = start;
        start = 0;
    }

    for (let i = start; i < stop; i += step) {
        result.push(i);
    }

    return result;
}

console.log(range(10)); // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(range(1, 11)); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(0, 30, 5)); // => [0, 5, 10, 15, 20, 25]
console.log(range(0, 10, 3)); // => [0, 3, 6, 9]
console.log(range(0)); // => [ ]
