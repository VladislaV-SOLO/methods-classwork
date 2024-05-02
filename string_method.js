// // 'use strict'

// let userName = 'Vlad'


// console.log(userName.length); // 4
// console.log(userName[0]); // V
// console.log(userName[15]); // undefined
// console.log(userName[-1]); // undefined
// console.log(userName.charAt(0)); // 'V'
// console.log(userName.charAt(-1)); // ''
// console.log(userName.charAt(15)); // ''
// console.log(userName.charAt(userName.length - 1)); // 'd'
// console.log(userName.at(0)); // 'V'
// console.log(userName.at(-1)); // 'd'
// console.log(userName.at(15)); // 'undefined'

// // Перебор строки
// for (let i = 0; i <= userName.length - 1; i++) {
//     console.log(userName[i]);
// }

// function foo() {
//     for (let i in userName) {
//         if (i === '0') break
//         console.log('in', userName[i]);
//     }
    
//     for (let letter of userName) {
//         if (letter === 'V') {
//             return
//         }
//         console.log('of', letter);
//     }
// }

// // 

// foo()
// userName.toLowerCase()
// userName.toUpperCase()

// // 

// const strForMethodIndexOf = 'это строка для текста метода IndexOf'
// console.log(strForMethodIndexOf.indexOf('для')); // 11
// console.log(strForMethodIndexOf.indexOf('для', -12)); // 11 (-12 игнорирует, начинает с 0 считать)
// console.log(strForMethodIndexOf.indexOf('для', 12)); // -1
// console.log(strForMethodIndexOf.indexOf('Это')); // -1

// if (strForMethodIndexOf.indexOf('это')) {
//     console.log('Код не выполнится');
// }
// if (~strForMethodIndexOf.indexOf('это')) {
//     console.log('Код выполнится');
// }
// // 
// const stringTask1 = 'Меня зовут Влад, тебя зовут влад тоже'
// function findAllOccurrences(text, searchText) {
//     let occurrences = []
//     let index = text.indexOf(searchText)

//     while (index !== -1) {
//         occurrences.push(index)
//         index = text.indexOf(searchText, index + 1)
//     }
//     return occurrences
// }
// console.log(findAllOccurrences(stringTask1, 'Влад'));
// console.log(stringTask1.includes('влад'));
// // 
// const stringTask2_1 = '!@#$.'
// const stringTask2_2 = 'Cat!@#$.'
// const stringTask2_3 = '!@#$.321312dawdaada'
// function checkAllCharactes(str1, str2) {
//     const requiredSymbolLenght = str1.length
//     let counter = 0
//     for (let char of str1) {
//         if (!str2.includes(char)) {
//             console.log('checkAllCharactes', false);
//             return false
//         } else {
//             console.log('checkAllCharactes', true);
//             counter++
//         }
//     }
//     return counter === requiredSymbolLenght
// }
// console.log(checkAllCharactes(stringTask2_1, stringTask2_2));
// // 

// console.log(stringTask1);
// console.log(stringTask1.slice(0, 3));
// console.log(stringTask1.slice(-4, -1));
// // 


// console.log(stringTask1.replace('влад', 'Стас'));
// stringTask1.replaceAll('влад', 'Стас')


// const badText = ['собака', 'петух', 'козёл']
// const messageIncorrect = 'Эй ты, петух. Я сказал козёл'
// const messageCorrect = 'Эй ты, чел'
// function filterMessage(message) {
//     let filtredMessage = message
//     for (let word of badText) {
//         filtredMessage = filtredMessage.replaceAll(word, '*'.repeat(word.length))
//     }
//     return filtredMessage
// }

// console.log(filterMessage(messageIncorrect));
// console.log(filterMessage(messageCorrect));










