/*
1) Показать пользователю информацию о погоде в его городе.
    Предложить пользователю ввести название города.
    Сделать запрос к ручке получения текущей погоды в этом городе (http://openweathermap.org/current#name).
    Если ответ получен, вывести пользователю температуру в цельсиях, продолжительность дня, скорость ветра.
    Если возникли ошибки, вывести сообщение об ошибке
*/

'use strict';

function getCyty(cityName) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bd5e378503939ddaee76f12ad7a97608`).
        then((response) => {
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
}

function formatTimeInterval(seconds) {
    const h = seconds / 3600 ^ 0;
    const min = seconds % 3600 / 60 ^ 0;
    const sec = seconds % 3600 % 60 ^ 0;
    return `${h} ч ${min} мин ${sec} с`;
}

function howWeatherIn(cityName) {
    getCyty(cityName).then((city) => {
        const durationDay = formatTimeInterval(city.sys.sunset - city.sys.sunrise);
        alert(`В городе ${city.name}\nПогода: ${city.weather[0].main}\nПродолжительность дня: ${durationDay}\nСкорость ветра: ${city.wind.speed} м/с`);
    }).catch((err) => alert(err));
}

howWeatherIn('Moscow');
