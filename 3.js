/*3
Написать функцию, котоая разбивает переданный массив arr на группы длиной size.
*/

function chunkArrayInGroups(arr, size) {
    let result = new Array(arr.length / size ^ 0); //Integer
    for (let i = 0; i < arr.length / size ^ 0; i++) {
        result[i] = new Array(size);
        for (let j = 0; j < size; j++) {
            result[i][j] = arr[i * size + j];
        }
    }
    return result;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)); // [["a", "b"], ["c", "d"]]
