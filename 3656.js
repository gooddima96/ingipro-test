/*
3656
Задача на знание особенностей JS, внимание к изначальным условиям и умение писать рекурсивные функции.
Написать функцию глубокого копирования значений, полученных в результате JSON.parse();
*/

'use strict';

const str = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": { "name": "Дима", "age": 21} }';
let oldObj = JSON.parse(str);

function deepCopy(object) {
    let copy = {};
    //copy = JSON.parse(JSON.stringify(object));    //Слишком просто...
    for (let key in object) {
        copy[key] = ({}.toString.call(object[key]).slice(8, -1) == 'Object') ? deepCopy(object[key]) : object[key];
    }
    return copy;
}

const newObj = deepCopy(oldObj);
oldObj.friends.name = 'Андрей';

console.log('Origin\n', oldObj);
console.log('Copy\n', newObj);
