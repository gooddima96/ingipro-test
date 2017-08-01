/*3
Написать функцию, котоая разбивает переданный массив arr на группы длиной size.
*/

'use strict';

function chunkArrayInGroups(arr, size) {
    const newSize = (size > 0) ? Math.ceil(arr.length / size) : 0;
    const result = new Array(newSize);

    for (let i = 0; i < newSize; i++) {
        result[i] = new Array(size);
        for (let j = 0; j < size; j++) {
            result[i][j] = arr[i * size + j];
        }
    }
    return result;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)); // [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 3)); // [["a", "b", "c"], ["d", undefined, undefined]]
console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 0)); // []
