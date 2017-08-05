/*
7
Напишите фукнцию сортировки sortLibrary массива объектов.
    Аргументы функции:
    library - массив объектов
field_name - ключ, по которому нужно отсортировать
reverse - порядок сортировки. Если true - по убыванию, false - по возрастанию
initial - функция преобразования значения, соответствующего ключу. Если передана, сортировка будет по значению
initial(value)
*/


function sortLibrary(library, field_name, reverse, initial = (item) => item) {
    const reverseInt = (reverse) ? -1 : 1;
    library.sort((a, b) => (initial(a[field_name]) > initial(b[field_name])) ? reverseInt : -reverseInt);
    return library;
}

const library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        libraryID: 1254,
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        libraryID: 4264,
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245,
    }];

console.log(sortLibrary(library, 'libraryID', true, parseInt));
/*
    [
        {
           title: 'Steve Jobs',
           author: 'Walter Isaacson',
           libraryID: 4264
        },
        {
           title: 'Mockingjay: The Final Book of The Hunger Games',
           author: 'Suzanne Collins',
           libraryID: 3245
       },
       {
           title: 'Bill Gates',
           author: 'The Road Ahead',
           libraryID: 1254
       }
    ]
*/
