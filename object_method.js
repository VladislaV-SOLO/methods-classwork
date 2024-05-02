// const obj = {
//     name: 'Vlad',
//     age: 21,
//     car: 'BMW'
// }

// const arr = ['book', 'car', 777, {car: 'Aydi'}]

// for (let el in obj) {
//     console.log(obj[el]);
// }

// console.log(Object.keys(arr))

// const content = {
//     car: 'mers',
//     name: 'vlad',
//     giper: 'evrick'
// }
//     console.log(Object.keys(content));
//     console.log(Object.values(content));

// const arr = [1, '2', {car:'audi'}]
//     console.log(Object.keys(arr));
//     console.log(Object.values(arr));
//     console.log(Object.entries(arr)); // [ [key('0'), value(1)] , [key('1'), value('2')], [key, value]]

// const colorArr = ['black', 'red']
// let value1 = colorArr[0]
// let value2 = colorArr[1]

// let [valueD1, valueD2] = ['black', 'red']
// console.log(valueD1, valueD2); // black red


// const cars = [
//     'audi', 'mers', 'bmw', {name: 'vlad'}
// ]

// let myCar = cars[0]
// let brother = cars[1]
// let sister = cars[2]
// let tempValue = cars[3]
// // let [myAuto, brothers, sisters] = cars
// cars.pop()
// console.log(tempValue);

// let myCar = cars[0]
// let tempValue = cars[3]

// let [myCar, , , value4] = cars
// console.log(myCar, value4);

// let [myCar, ...rest] = cars
// console.log(myCar, rest);

// let [...rest] = cars

// cars[cars.length - 1].name = 'Stas'
// cars[0] = 'aaa'

// console.log(cars); //всё одинаково кроме 0 индекса здесь 'ааа'
// console.log(rest); //всё одинаково кроме 0 индекса здесь 'audi'

// const carsList = [[1, 2, 3],undefined, null, '', NaN, , false, 'skoda', 'bmw', {name: 'vlad'}]

// const [
//     [num1, num2],
//     elem1 = 'this is default value1',
//     elem2 = 'this is default value2',
//     elem3 = 'this is default value3',
//     elem4 = 'this is default value4',
//     elem5 = 'this is default value5',
//     elem6,
//     elem7,
//     elem8,
//     elem9,
//     elem10 = '',
// ] = carsList


// console.log('num1', num1);
// console.log('num2', num2);

// console.log('elem1', elem1);// this is default values1
// console.log('elem2', elem2);// null
// console.log('elem3', elem3);// 
// console.log('elem4', elem4);// NaN
// console.log('elem5', elem5);// this is default values5
// console.log('elem6', elem6);// false
// console.log('elem7', elem7);// skoda
// console.log('elem10', elem10);



// const arrTest = ['a', [1, [{name: 'vlad'}]]]
// let [el, [el2, [el3]], el4] = arrTest
// el4 = 'dima'
// console.log(el);
// console.log(el2);
// console.log(el3);
// console.log(el4);


// const obj = {
//     name: 'Vlad',
//     age: 21,
//     car: undefined
// }

// const car = 'folks'
// const {name = 'sveta', age, car: myCar = 'bmw'} = obj
// console.log(car);
// console.log(myCar);
// console.log(name);
// console.log(age);

// let obj2 = {
//     price: 30,
//     product: 'pko'
// }
// const {price, product} = obj2
// console.log(price, product);// 30 'pko'

// const carsList2 = [undefined, null, '', NaN, , false, 'skoda', 'bmw', {name: 'vlad'}]

// const copyArray = [...carsList2]
// carsList2

// function foo(src, sort) {
//     if (!!src) {
//         console.log(`картинка находиться по адресу: ${src}`);
//     } else {
//         console.log(`картинки нет, воспользуйтесь ${sort}`);
//     }
// }
// foo(obj2)

// const arr = [
//     {cars: 'Audi'},
//     'bmw' 
// ]
// const cloneArr = [...arr]


// const nums = [1,2,3,4,5,6,7,8,9,10]

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function randomNums(num) {
//     const copy = [];
//     for (let i = 0; i < num; i++) {
//         copy.push(i + 1)
//     } 
//     const replaceIndex = getRandomInt(0, num)

//     copy.splice(replaceIndex, 1, 'piff-paff')
//     return copy
// }
// console.log(randomNums(10))



























