/*
3510
На входе два массива. Нужно написать функцию, которая возвращает массив с числами из переданных массивов без дубликатов:
*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 5, 6, 7];

function f(arr1, arr2) {
    let uniqSet = new Set();
    let resultArr = [];
    let sumOfArr = arr1.concat(arr2);

    for(let key in sumOfArr) {
        let len1;
        len1 = uniqSet.size;
        uniqSet.add(sumOfArr[key]);
        if (len1 < uniqSet.size) {
            resultArr.push(sumOfArr[key]);
        }
    }
    return resultArr;
}
console.log(f(arr1, arr2)); //=> [1, 2, 3, 4, 5, 6, 7]

