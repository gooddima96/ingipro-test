/*
4532
Написать функцию truncate(str, count), которая будет обрезать строку по словам.
*/

'use strict';

const str = 'Мама мыла раму';

function truncate(string, lenght) {
    const spaceOnEnd = string.slice(0, lenght + 1).search(/\s\S*$/);
    const firstSpace = (spaceOnEnd === -1) ? string.search(/\s/) : spaceOnEnd;

    return (string.length > lenght) ? `${string.slice(0, firstSpace) }...` : string;
}

console.log(truncate(str, 5)); // 'Мама...'
console.log(truncate(str, 11)); // 'Мама мыла...'
