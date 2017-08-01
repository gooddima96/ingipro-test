/*
6
Написать функцию, которая вернет новый объект, у которого ключи стали значениями, а значения ключами
*/

'use strict';

function invert_key_value(obj) {
    const result = {};
    for (let key in obj) {
        result[obj[key]] = key;
    }
    return result;
}

console.log(invert_key_value({red: '#FF0000', green: '#00FF00', white: '#FFFFFF'}));
// {#00FF00: "green", #FF0000: "red", #FFFFFF: "white"}
