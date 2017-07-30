/*
4532
Написать функцию truncate(str, count), которая будет обрезать строку по словам.
*/

'use strict';

const str = 'Мама мыла раму';

function truncate(string, lenght) {
    return (string.length > lenght) ? `${string.substr(0, string.slice(0, lenght + 1).search(/\s\S*$/)) }...` : string;
}

console.log(truncate(str, 7)); // 'Мама...'
console.log(truncate(str, 11)); // 'Мама мыла...'
