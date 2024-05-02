// let num = 5.12345
// num.toString()
// // Math.floor -- округляет в меньшую сторону
// console.group('Math.floor');
// console.log(window.Math.floor(-5.1)); // -6
// console.log(window.Math.floor(-5.9)); // -6
// console.log(window.Math.floor(5.1)); // 5
// console.log(window.Math.floor(5.9)); // 5
// console.groupEnd();

// // Math.ceil -- округляет в большую сторону
// console.group('Math.ceil');
// console.log(window.Math.ceil(-5.1)); // -5
// console.log(window.Math.ceil(-5.9)); // -5
// console.log(window.Math.ceil(5.1)); // 6
// console.log(window.Math.ceil(5.9)); // 6
// console.groupEnd();

// // Math.round -- округляет до ближайшего целого
// console.group('Math.round');
// console.log(window.Math.round(-5.1)); // -5
// console.log(window.Math.round(-5.9)); // -6
// console.log(window.Math.round(-5.5)); // -5
// console.log(window.Math.round(5.1)); // 5
// console.log(window.Math.round(5.5)); // 6
// console.log(window.Math.round(5.9)); // 6
// console.groupEnd();

// // Math.trunc -- удаляет дроби без округления
// console.group('Math.trunc');
// console.log(window.Math.trunc(-5.1)); // -5
// console.log(window.Math.trunc(-5.9)); // -5
// console.log(window.Math.trunc(6.1)); // 6
// console.log(window.Math.trunc(6.9)); // 6
// console.groupEnd();

// // number.toFixed(n) от 0 до 20 -- фиксирует количестсво знаков после точки
// console.group('Math.trunc');
// console.log(num.toFixed());//5
// console.log(num.toFixed(0));//5
// console.log(num.toFixed(1));//5.1
// console.log(num.toFixed(5));//5.12345
// console.log(num.toFixed(7));//5.1234500
// console.log(num.toFixed(-1));//RangeError(ошибка)
// console.groupEnd();

// // isNaN

// console.group('isNaN');
// console.log(isNaN(123)); // false -- 123число
// console.log(isNaN('123')); // false - 123 можно преобразовать в число
// console.log(isNaN('hello')); // true
// console.log(isNaN('123hello')); // true
// console.log(isNaN('true')); //false, пустую строку можно преобразовать в число
// console.log(isNaN('false')); //false, пустую строку можно преобразовать в число
// console.log(isNaN('')); // false, пустую строку можно преобразовать в число
// console.log(isNaN(null)); // false
// console.log(isNaN(NaN)); // true
// console.log(isNaN(undefined)); // true
// console.log(isNaN(['123'])); // false / Number(['123']) -> 123
// console.log(isNaN([123])); // false / Number([123]) -> 123
// console.log(isNaN([1, 2])); // false / Number([1, 2]) -> NaN
// console.groupEnd();

// // isFinite

// console.group('isFinite');
// console.log(isFinite(123)); // true -- 123число
// console.log(isFinite('123')); // true - 123 можно преобразовать в число
// console.log(isFinite('123.12331')); // true
// console.log(isFinite('123,12331')); // false
// console.log(isFinite('hello')); //false 
// console.log(isFinite(false)); //true
// console.log(isFinite('')); // true
// console.log(isFinite(null)); // true
// console.log(isFinite(NaN)); // false
// console.log(isFinite(undefined)); // false
// console.log(isFinite(['123'])); // true / Number(['123']) -> 123
// console.log(isFinite([123])); // true / Number([123]) -> 123
// console.log(isFinite([1, 2])); // false / Number([1, 2]) -> NaN
// console.groupEnd();

// // Object.is (window.Object.is())

// console.group('Object.is');
// console.log(Object.is(NaN, NaN)); // true
// console.log(Object.is(-0, 0)); // false
// console.log(Object.is('Root', 'ROOT')); // false
// console.log(Object.is('Root', 'Root')); // true
// console.groupEnd();

// // parseInt()

// console.group('parseInt');
// console.log(parseInt('123')); // 123
// console.log(parseInt('123hello')); // 123
// console.log(parseInt('1hello123')); // 1
// console.log(parseInt('hello123')); // NaN
// console.log(parseInt(['123'])); // 123
// console.log(parseInt(['123hello'])); // 123
// console.log(parseInt(['123hello', 'hello'])); // 123
// console.log(parseInt(['hello123', 'hello'])); // NaN
// console.log(parseInt(32.321)); // 32
// console.log(parseInt('32.321')); // 32
// console.log(parseInt(.321)); // NaN
// console.log(parseInt('false')); // NaN
// console.log(parseInt(false)); // NaN
// console.log(parseInt(true)); // NaN
// console.log(parseInt('')); // NaN
// console.log(parseInt(null)); // NaN
// console.groupEnd();

// // parseFloat()

// console.group('parseFloat');
// console.log(parseFloat('123')); // 123
// console.log(parseFloat('123hello')); // 123
// console.log(parseFloat('1hello123')); // 1
// console.log(parseFloat('hello123')); // NaN
// console.log(parseFloat(['123'])); // 123
// console.log(parseFloat(['123hello'])); // 123
// console.log(parseFloat(['123hello', 'hello'])); // 123
// console.log(parseFloat(['hello123', 'hello'])); // NaN
// console.log(parseFloat(32.321)); // 32.321
// console.log(parseFloat('32.321')); // 32.321
// console.log(parseFloat(.321)); // 0.321
// console.log(parseFloat('false')); // NaN
// console.log(parseFloat(false)); // NaN
// console.log(parseFloat(true)); // NaN
// console.log(parseFloat('')); // NaN
// console.log(parseFloat(null)); // NaN
// console.groupEnd();

// // Math.max()
// console.group('Math.max');
// console.log(Math.max(3, 5, 10, 200, -1)); // 200
// console.log(Math.max(NaN, 3, 5, 10, 200, -1)); // NaN
// console.log(Math.max('hello', 3, 5, 10, 200, -1)); // NaN
// console.log(Math.max(3, 5, 10, 200, -1, 'hello')); // NaN
// console.log(Math.max(3, 5, 10, 200, -1, '', true, false, null)); // 200
// console.groupEnd();

// // Math.min()
// console.group('Math.min');
// console.group('Math.max');
// console.log(Math.max(3, 5, 10, 200, -1)); // -1
// console.log(Math.max(NaN, 3, 5, 10, 200, -1)); // NaN
// console.log(Math.max('hello', 3, 5, 10, 200, -1)); // NaN
// console.log(Math.max(3, 5, 10, 200, -1, 'hello')); // NaN
// console.log(Math.max(3, 5, 10, 200, -1, '', true, false, null)); // -1
// console.groupEnd();

// // Math.random()
// console.log(Math.random());

// //получение случайного числа в заданном интервале
// function getRandom(min, max) {
// console.log(parseInt(Math.random() * (max - min) + min));
// }


// console.group('Array.prototype.forEach()')
// let testArrayForEach = [1, 2, 3, 4, 5, {name: 'Vlad'}]

// console.log('before forEach', testArrayForEach);

// testArrayForEach.forEach((element, index, array) => {
//     console.log(element);
//     console.log(index);
//     console.log(array);
    // if (index == 2) return;
    // if (index == 1) array.push(7);
    // if (index === 1) array.splice(index + 1, 1)
    // if (index === 1) array.splice(index + 1, 0, 'add item')
    // element = element + 2// игнорируется
    // if (typeof element !== 'object') {
    //     array[index] = Math.pow(element, 2)
    // } else {
    //     element.name = 'Alina'
    // }
// })

// console.log('after forEach', testArrayForEach);
// console.groupEnd();
 

// FIND



// console.group('Array.prototype.find()')
// let testArrayForFind = [1, 2, 3, 4, 5, {name: 'Vlad'}]

// console.log('before find', testArrayForFind);

// console.log(testArrayForEach.find((element, index, array) => {
//    if (typeof element !== 'number') return true
    
// }))

// console.log('after find', testArrayForFind);
// console.groupEnd();

// const users = [
//     {id: 1, name:'Влад'},
//     {id: 2, name:''},
//     {id: 3, name:'Стас'},
//     {id: 4, name:'Оля'},
// ]

// function foo(userList, targetName) {
//     const foundObj = userList.find((content) => !content.name)
//     foundObj.name = targetName
//     }

// foo(users, 'Тамара')
// console.log(users);

// rhrhrregbtbrgthrtbfrtbhdebrbhrehrtrhrhrregbtbrgthrtbfrtbhdebrbhrehrt
// rhrhrregbtbrgthrtbfrtbhdebrbhrehrtrhrhrregbtbrgthrtbfrtbhdebrbhrehrt
// rhrhrregbtbrgthrtbfrtbhdebrbhrehrtrhrhrregbtbrgthrtbfrtbhdebrbhrehrt

// Условие:
// У вас есть массив tasks, который представляет список задач для выполнения.
// Вам нужно добавить новую задачу в массив, вставив ее на определенную позицию,
// и при этом удалить несколько существующих задач.

// Напишите функцию updateTasks(tasks, newTask, startIndex, deleteCount),
// которая принимает массив tasks, новую задачу newTask,
// индекс startIndex (позицию, на которую нужно вставить новую задачу)
// и количество задач deleteCount, которые нужно удалить из массива.
// Функция должна изменить исходный массив и вернуть его.

// const tasks = [
//     'Проснуться',
//     'поработать',
//     'погулять', 
//     'поесть'
// ]


// function updateTasks(tasksParam , newTask, startIndex, deleteCount) {
//     tasksParam.splice(startIndex, deleteCount,  newTask)
//     return tasks
// }


// console.log( updateTasks(tasks, 'new task', 1, 0) )

// УсловиеЖ
// Напишите функцию modifyTaskList(tasks, indexToRemove, taskToAdd, indexToReplace, newTask),
// которая принимает массив задач tasks, индекс задачи для удаления indexToRemove, новую задачу taskToAdd,
// индекс для замены indexToReplace и новую задачу newTask.
// Функция должна изменить массив tasks в соответствии с заданными действиями,
// используя метод splice().


// const tasks = [
//     'ауди',
//     'бмв',
//     'мерс', 
//     'фольс'
// ]

// function modifyTaskList(tasks, indexToRemove, taskToAdd, indexToReplace, newTask) {
//     tasks.splice(indexToRemove, 1)
//     tasks.splice(indexToReplace, 0, taskToAdd)
//     tasks.splice(indexToReplace, 0, newTask)
//     return tasks
// }

// console.log(modifyTaskList(tasks, 3, 'хёндай', 2, 'только ауди'))
/*
Условие:
У вас есть массив shoppingList, который представляет ваш список покупок.
Вы хотите создать копию этого списка, чтобы иметь возможность вносить изменения в копию,
не затрагивая исходный список. Кроме того, вы хотите извлечь только часть списка,
чтобы поделиться этой информацией с другом.
Напишите функцию copyAndExtractList(shoppingList, startIndex, endIndex), которая принимает массив shoppingList,
начальный индекс startIndex и конечный индекс endIndex, и возвращает копию списка, а также новый массив,
содержащий элементы из shoppingList, начиная с startIndex и заканчивая endIndex (не включительно).
Возвращаемое значение должен быть объект, содержащий исходную поверхностную копию списка, а также извлеченный список
(copy, extracted)
*/

// const shoppingList = ['Яблоки',
//  'Молоко',
//   'Хлеб',
//    'Яйца',
//     'Масло',
//      'Сахар',
//       'Мука'];

// function copyAndExtractList(shoppingList, startIndex, endIndex) {
//     const extracted = shoppingList.slice(startIndex, endIndex)
//     const copy = shoppingList.slice(0)
    
//     return {copy, extracted}
// }

// console.log(copyAndExtractList(shoppingList, 1, 6))

/*
Условие:
У вас есть массив articles, который содержит информацию о статьях на вашем блоге.
Вы хотите отобразить только определенное количество самых популярных статей на главной странице блога.
Напишите функцию getPopularArticles(articles, count), которая принимает массив статей articles и число count,
обозначающее количество статей, которые нужно отобразить на главной странице блога.
Функция должна вернуть новый массив, содержащий только указанное количество самых популярных статей.
*/
// const articles = [
//     { title: '10 способов улучшить свои навыки программирования', views: 500 },
//     { title: 'Как стать успешным веб-разработчиком', views: 700 },
//     { title: 'Искусство дизайна интерфейсов: секреты профессионалов', views: 1000 },
//     { title: 'Путешествие в мир машинного обучения: введение', views: 300 },
//     { title: 'Руководство по созданию веб-приложений с использованием React', views: 900 }
// ];

// function getPopularArticles(articles, count) {
//     const sort = articles.sort((a, b)=> a.views - b.views )
//     const result = articles.slice(count)
//     return {sort, result}
// }
// console.log(getPopularArticles(articles, 3))


/*
Напишите функцию displayEmployeeInfo(employees), которая принимает массив объектов employees и
выводит информацию о каждом сотруднике в консоль.
объект содержит информацию о сотруднике:
имя (name), должность (position) и зарплата (salary)
*/

// const employees = [
//     { name: 'Иван', position: 'Разработчик', salary: 3000 },
//     { name: 'Мария', position: 'Дизайнер', salary: 2500 },
//     { name: 'Алексей', position: 'Тестировщик', salary: 2800 }
// ];

// function displayEmployeeInfo(employees) {
//     employees.forEach()
// }
// console.log(displayEmployeeInfo(employees))

// const arr = [
//     {product: 'кубик рубик', price: 20},
//     {product: 'шкаф', price: 110},
//     {product: 'стол', price: 80},
//     {product: 'стул', price: 50},
// ]

// function max(arr) {
//     const prices = arr.map(el => el.price)
//     console.log(Math.max(...prices));
// }
// max(arr)

// function sum(arr) {
//     let result = 0
//     arr.forEach((element) => {
//         result += element.price
//     })
//     console.log(result);
// return result
// }
// sum(arr)














