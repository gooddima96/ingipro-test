/*
1
Написать функцию reverseString, которая будет возвращать реверсированную строку
*/

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('А роза упала на лапу Азора'));
