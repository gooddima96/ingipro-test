/*
3736
Дана строка, состоящая из букв A-Z:
"AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"
Нужно написать функцию RLE, которая на выходе даст строку вида:
"A4B3C2XYZD4E3F3A6B28"
И сгенерирует любую ошибку, если на вход пришла невалидная строка.
    Пояснение:
1. если символ встречается 1 раз, он остается без изменений
2. если символ повторяется более 1 раза, к нему добавляется количество повторений
*/

'use strict';

const myString = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB';

function rle(str) {
    if (!/^[A-Z]+$/.test(str)) {
        throw Error('Invalid string');
    }
    return str.replace(/([A-Z])\1+/g, (foundStr, p1) => p1 + foundStr.length);
}

console.log(rle(myString));
