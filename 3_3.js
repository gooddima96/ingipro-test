/*
3) Показать пользователю погоду в нескольких городах
Пользователь вводит через запятую названия городов.
Нужно получить для этих городов погоду из ручки http://openweathermap.org/current#name.
И вывести пользователю информацию о погоде в этих городах
Например, пользователь ввел: Moscow, New-York, London.
Покажем ему сообщение:
    "Moscow: температура 21C, скорость ветра 4.1, влажность 80%,
    New-York: температура 26C, скорость ветра 7.1, влажность 70%,
    London: температура 19C, скорость ветра 1.1, влажность 90%"
*/

function getCyty(cityName) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`).
        then((response) => {
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
}

function showWeatherInCityes() {
    const arr = [].slice.call(arguments);
    let chain = Promise.resolve();
    const results = [];

    arr.forEach((thisCity) => {
        chain = chain.then(() => getCyty(thisCity))
            .then((city) => {
                results.push(`${city.name}: температура ${city.main.temp}°C, скорость ветра ${city.wind.speed}, влажность ${city.main.humidity}%`);
            });
    });

    chain.then(() => {
        alert(results.join(',\n'));
    }).catch(err => alert(err));
}

showWeatherInCityes('Moscow','New-York', 'London');
