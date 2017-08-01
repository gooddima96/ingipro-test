/*
Мы описали пользователя mike и всех его друзей в формате JSON:
    var mike = {
        friends: [{
            name: 'Anna',
            avatar: {
                url: 'http://some/url/to/avatar'
            }
        }]
    }
Вам необходимо получить аватар первого друга mike .
Если друзей нет или они не загрузили своё фото, то нужно вернуть 'http://default/url/to/avatar'
*/

'use strict';

var mike = {
    friends: [{
        name: 'Anna',
        avatar: {
            url: 'http://some/url/to/avatar',
        },
    }],
};

function getProp(obj, path, def) {
    let result = obj;
    const keyArr = path.split('.');
    
    for (let key in keyArr) {
        result = result[keyArr[key]];
        if (result === undefined) {
            result = def;
            break;
        }
    }

    return result;
}

console.log(getProp(mike, 'friends.0.avatar.url', 'http://default/url/to/avatar'));
