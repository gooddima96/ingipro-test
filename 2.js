/*
2
Написать функцию palindrome, которая будет возвращает true, если переданная строка является полиндромом, и false, если не является
*/

'use strict';

function palindrome(str) {
    const notSpace = str.replace(/\s/gim, '').toLowerCase();
    return (notSpace === notSpace.split('').reverse().join(''));
}

console.log(palindrome('eye')); // true
console.log(palindrome('hello')); // false
console.log(palindrome('А роза упала на лапу Азора')); // true
