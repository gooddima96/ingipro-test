/*
5
Написать функцию, которая в переданной строке str меняет слово before на слово after и возвращает новую строку.
Если слово before начиналось с заглавной буквы, вставленное вместо него слово after тоже должно начинаться с заглавной буквы
*/

'use strict';

function myReplace(str, before, after) {
    const isUpper = (before[0].toLowerCase() !== before[0]);
    const afterPlus = (isUpper) ? `${after[0].toUpperCase()}${after.slice(1)}` : `${after[0].toLowerCase()}${after.slice(1)}`;

    return str.split(before).join(afterPlus);
}

console.log(myReplace('Let us get back to more Coding', 'Coding', 'algorithms'));
// "Let us get back to more Algorithms".

console.log(myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped'));
// "A quick brown fox leaped over the lazy dog"
