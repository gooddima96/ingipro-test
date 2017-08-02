/*
1) Показать пользователю информацию о погоде в его городе.
    Предложить пользователю ввести название города.
    Сделать запрос к ручке получения текущей погоды в этом городе (http://openweathermap.org/current#name).
    Если ответ получен, вывести пользователю температуру в цельсиях, продолжительность дня, скорость ветра.
    Если возникли ошибки, вывести сообщение об ошибке
*/

'use strict';

const cityName = prompt('Введите город:', 'Moscow');

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bd5e378503939ddaee76f12ad7a97608`).
    then((response) => {
        return response.json();
    }).then((r) => {
        let h = (r.sys.sunset - r.sys.sunrise) / 3600 ^ 0;
        let min = (r.sys.sunset - r.sys.sunrise) % 3600 / 60 ^ 0;
        let sec = (r.sys.sunset - r.sys.sunrise) % 3600 % 60 ^ 0;
        alert(`В городе ${ r.name
        }\nПогода: ${ r.weather[0].main
        }\nПродолжительность дня: ${ h } ч ${ min } м ${ sec } c` +
        `\nСкорость ветра: ${ r.wind.speed } м/с`);
    }).catch((e) => alert(e));
