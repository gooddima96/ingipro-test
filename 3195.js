'use strict';

/*
3195
Напишите функцию, которая в данном интерфейсе возвращает одно случайное число через случайный промежуток времени.
*/

function randomNumber() {
    const startTime = Date.now();
    const MIN = 1;
    const MAX = 2;
    let myRandom = (min, max) => min + (max - min) * Math.random();
    
    const randomMs = myRandom(MIN, MAX) * 1000 ^ 0; //Integer milliseconds
    // console.log('Wait:', randomMs);
    while (randomMs > Date.now() - startTime){}

    return myRandom(MIN, MAX);
}

console.log(randomNumber());
