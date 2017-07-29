/*
3641
Написать функцию, принимающую на вход произвольную строку и длину строки, и возвращающую исходную строку,
в которую вставлены символы перевода строки ('\n') в нужных местах, так, чтобы ни одна подстрока не превышала заданную длину.
По возможности нужно перносить по границам слов. Например:
wrap("мама мыла раму", 11); // "мама мыла\nраму"
wrap("экскурсия", 4); // экск\nурси\nя
*/

'use strict';

function wrap(string, lenght) {
    let result = '';
    let start = 0;
    let end;
    let tmp;
    let notEof;
    let existSpace;

    while (start < string.length) {
        notEof = (string[start + lenght] !== undefined);
        existSpace = (tmp = string.slice(start, start + lenght + 1).lastIndexOf(' ')) > 0;
        end = (notEof && existSpace) ? tmp : lenght;
        result += `${string.substr(start, end) }\n`;
        start += end + Number(existSpace);
    }

    return result;
}

console.log(wrap('мама мыла раму', 11)); // "мама мыла\nраму"
console.log(wrap('экскурсия', 4)); // экск\nурси\nя

