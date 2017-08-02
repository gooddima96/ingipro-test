/*
2) Теплее ли в ближайшем городе?
Как в 1ой задаче предложить пользователю ввести название города.
Сделать запрос к ручке получения текущей погоды в этом городе (http://openweathermap.org/current#name).
Из ответа узнать координаты его города. Сделать запрос к ручке http://openweathermap.org/current#cycle, и узнать
погоду в 5 ближайших городах.
Найти город с максимальной температурой. Вывести сообщение.
Например, пользователь ввел Moscow.
Покажем ему сообщение:
"В городе Ryazanovo температура 21C. Это на 2С теплее, чем в Moscow". - Если температура выше, чем в городе пользователя
"В городе Moscow теплее, чем в 5 ближайших городах". - Если в найденных городах температура ниже, чем в городе пользователя
*/

'use strict';

function getCoord(cityName) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bd5e378503939ddaee76f12ad7a97608`).
        then(response => {
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
            return response.json();
        }).then(city => {
            return {
                lon: city.coord.lon,
                lat: city.coord.lat,
            };
        });
}

function getCityesNeighbors({lon, lat}, numberOfNeighbors = 5) {
    return fetch(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=${numberOfNeighbors + 1}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`).
        then(response => {
            if (response.status !== 200) {
            //alert(response.statusText);
                throw new Error(response.statusText);
            }
            return response.json();
        }).then(cityes => {
            return cityes.list;
        });
}

function findWarmestCity(cityes) {
    const tmp = cityes.slice();
    tmp.sort((a, b) => b.main.temp - a.main.temp);
    cityes.forEach((cityes) => console.log(cityes.name, cityes.main.temp));
    //tmp.forEach((cityes) => console.log(cityes.name, cityes.main.temp));
    return tmp[0];
}

function checkNeihboringCities(cityName, numberOfNeighbors = 5) {
    getCoord(cityName).then(({lon, lat}) => {
        getCityesNeighbors({lon, lat},numberOfNeighbors).then(cityes => {
            const warmestCity = findWarmestCity(cityes);
            if (warmestCity.name === cityes[0].name) {
                console.log(`В городе ${cityes[0].name} теплее чем в ${cityes.length - 1} ближайших городах`);
            } else {
                console.log(`В городе ${warmestCity.name} ${warmestCity.main.temp}°C. Это теплее, чем в ${cityes[0].name} на ${(warmestCity.main.temp - cityes[0].main.temp).toFixed(2)}°C`);
            }
        }).catch(err => alert(err));
    }).catch(err => alert(err));
}

checkNeihboringCities('Moscow', 5);
