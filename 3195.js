'use strict';

/*
3195
Напишите функцию, которая в данном интерфейсе возвращает одно случайное число через случайный промежуток времени.
*/

function randomNumber() {
    const startTime = Date.now();
    const min = 1;
    const max = 2;
    let myRandom = (min, max) => (min + (max - min) * Math.random());
    
    const randomMs = myRandom(min, max) * 1000 ^ 0; //Integer milliseconds
    // console.log('Wait:', randomMs);
    while (randomMs > Date.now() - startTime);

    return myRandom(min, max);
}

console.log(randomNumber());
