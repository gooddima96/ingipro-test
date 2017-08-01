/*
4532
Написать функцию truncate(str, count), которая будет обрезать строку по словам.
*/

'use strict';

const str = 'Мама мыла раму';

function truncate(string, lenght) {
    const FIRST_SPACE = (string.slice(0, lenght + 1).search(/\s\S*$/) === -1) ? string.search(/\s/) : string.slice(0, lenght + 1).search(/\s\S*$/);

    return (string.length > lenght) ? `${string.slice(0, FIRST_SPACE) }...` : string;
}

console.log(truncate(str, 5)); // 'Мама...'
console.log(truncate(str, 11)); // 'Мама мыла...'
