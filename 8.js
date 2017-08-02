/*
8
Напишите функцию getImage(url), которая возвращает промис, переходящий в состояние "resolved",
если картинка успешно загрузилась и в "rejected" если при загрузке произошла ошибка.
*/

function getImage(url) {
    const img = new Image();
    img.src = url;
    return new Promise((resolve, reject) => {
        img.onload = () => resolve(url);
        img.onerror = () => reject(url);
    });
}

getImage('http://bit.ly/2vntYlL').then(url => {
    alert(`${url} successfully loaded`);
}).catch(url => {
    alert(`Error loading ${url}`);
});
