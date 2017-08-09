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

function getcitiesNeighbors({lon, lat}, numberOfNeighbors = 5) {
    return fetch(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=${numberOfNeighbors + 1}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`).
        then(response => {
            if (response.status !== 200) {
            //alert(response.statusText);
                throw new Error(response.statusText);
            }
            return response.json();
        }).then(cities => {
            return cities.list;
        });
}

function findWarmestCity(cities) {
    const tmp = cities.slice();
    tmp.sort((a, b) => b.main.temp - a.main.temp);
    return tmp[0];
}

function checkNeihboringCities(cityName, numberOfNeighbors = 5) {
    getCoord(cityName).then(({lon, lat}) => {
        getcitiesNeighbors({lon, lat},numberOfNeighbors).then(cities => {
            const warmestCity = findWarmestCity(cities);
            if (warmestCity.name === cities[0].name) {
                console.log(`В городе ${cities[0].name} теплее чем в ${cities.length - 1} ближайших городах`);
            } else {
                console.log(`В городе ${warmestCity.name} ${warmestCity.main.temp}°C. Это теплее, чем в ${cities[0].name} на ${(warmestCity.main.temp - cities[0].main.temp).toFixed(2)}°C`);
            }
        }).catch(err => alert(err));
    }).catch(err => alert(err));
}

checkNeihboringCities('Moscow', 5);
