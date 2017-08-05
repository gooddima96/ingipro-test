/*
3656
Задача на знание особенностей JS, внимание к изначальным условиям и умение писать рекурсивные функции.
Написать функцию глубокого копирования значений, полученных в результате JSON.parse();
*/

'use strict';
const str = '{ "friends": [{"name": "Anna", "avatar": { "url": "http://some/url/to/avatar", "size": null } }] }';
let oldObj = JSON.parse(str);

function deepCopy(object) {
    //return JSON.parse(JSON.stringify(object));
    const copy = {};
    for (let key in object) {
        copy[key] = (object[key] instanceof Object) ? deepCopy(object[key]) : object[key];
    }
    return copy;
}

const newObj = deepCopy(oldObj);
oldObj.friends[0].avatar.url = 'best_ava';

console.log('Origin\n', oldObj.friends); //[ { name: 'Anna', avatar: { url: 'best_ava', size: null } } ]
console.log('Copy\n', newObj.friends); //[ { name: 'Anna', avatar: { url: 'http://some/url/to/avatar', size: null } } ]
