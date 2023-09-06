// https://www.freecodecamp.org/
/***** Оголошення змінних *****/
// const value = 10;

// let value;
// console.log(value);

// value = 10;

// console.log(value);

// value = 'Hello world'
// console.log(value);

// console.log(value);

// value = 10;
// value = 10;
// value = 10;
// value = 10;
// value = 10;

/***** Примітивні типи даних ****/

// Number
// let value = 10.1;

// String
// const name = 'Student ${}'
// value = "I`m Hello ${name}"
// value = `Hello I am ${name}` // `Hello I am Student`
// console.log(value);

// Типи рядків '' "" ``

// Boolean (true, false)

// const password = 'qwerty111';

// console.log('qwerty111' === password);

// undefined
// let value;
// console.log(value);

// null
// console.log(localStorage.getItem('number'));

// перевірка типу даних з яким працюємо метод typeof

// const value = 10
// console.log(typeof value);
// console.log(typeof value === Number);

/***** Комунікація з користувачем та можливість відображення якогось результату *****/

// console.log('Привіт вчи JS');

// alert('Привіт вчи JS')

// const message = prompt("Введіть і'мя")
// console.log(message);
// console.log(typeof message);
// const result = confirm('Будеш вчити JS ?');
// console.log(result);

/***** Основні оператори *****/

// >
// console.log(25 > 21);

// <
// console.log(25 < 24);

// ==
// console.log('false' == 0);
// console.log(false == 0);

// ===
// console.log('25' === 25);

// <=
// console.log(24 <= 25);
// console.log(25 <= 25);

// >=
// console.log(26 >= 20);
// console.log(26 >= '26');

// !=
// console.log('1' != 1);

// !==
// console.log('1' !== 1);

// Приклади роботи

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('a' < 'aAbBc');

// console.log('Papaya' === 'papaya');

/***** Значення які завжди будуть конвертовані до false (Обов'язково!!!) *****/

// // 0 (число нуль)
// console.log(Boolean(0));
// // "" (порожній рядок)
// console.log(Boolean(''));
// // NaN
// console.log(Boolean(NaN));
// // undefined
// console.log(Boolean(undefined));
// // null
// console.log(Boolean(null));
// // false
// console.log(Boolean(false));

// const message = prompt()
// console.log(message.length);

// if(message){
//     console.log('OKAY');
// }else{
//     console.log('NO VALUE');
// }

/***** Логічні оператори *****/

// ||
// console.log('' || 0 || 1);

// ?? реагує лише на null та undefined
// console.log(0 ?? 1);
// console.log(null ?? 1);
// console.log(undefined ?? 10);

// &&
// console.log(false && 1);
// console.log(NaN && 2);

// console.log(1 && 5 && 23);
// console.log(1 && 0 && 23);

// Приклади роботи

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3)

// console.log(3 || true || 4);

// console.log('' || false || 7);

// console.log(null || 2 || undefined);

// console.log('' ??  4);

// console.log(false ?? 7);

// console.log(null ?? 7);

// console.log(undefined ?? 7);














/***** Методи для роботки з числами (тип даних Number) *****/

// const str = '25.7a32px';

// Number.parseInt()
// console.log(Number.parseInt(str));

// Number.parseFloat()
// console.log(Number.parseFloat(str));


// console.log(typeof Number(str));
// console.log(Number(str) === NaN);

// Number.isNaN()  та метод isNaN()
// console.log(isNaN(str)); // Number.isNaN(Number(str)) 

// const num = Number(str) // NaN
// console.log(Number.isNaN(Number(str))); //'25.7a32px' //NaN






// const str = '25.7a32px';
// console.log(typeof str);
// console.log(Number.isNaN(str));// NaN //String
// console.log(isNaN(str)); //Number(str) => NaN



// console.log(isNaN('abc'));
// // 1 Перетворить до числа
// // 2 Перевірить чи результат перетворення буде NaN

// const value = Number('abc')
// console.log(Number.isNaN(value));





// Класс Math
// const value = 11.50;
// console.log(Math.floor(value));

// console.log(Math.ceil(value));

// Math.round()
// console.log(Math.round(value));
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow?retiredLocale=uk
// s



/***** Методи та властивості для роботки з рядками (тип даних String) *****/

// const str = 'Hello World';

// length
// console.log(str.length);

// toLowerCase()
// console.log(str.toLowerCase());
// console.log(str);

// toUpperCase()
// console.log(str.toUpperCase());

// indexOf()
// console.log(str.indexOf(' '));
// console.log(str.indexOf('lla'));



// includes
// console.log(str.includes('world'));

// endsWith()
// console.log(str.endsWith('world'));

// startsWith()
// console.log(str.startsWith('H'));

// replace()
// console.log(str.replace('l', '🍕'));


// replaceAll()
// console.log(str.replaceAll('l','🍟'));

// slice()
// const str = 'Hello world';
// console.log(str.slice(0, str.indexOf(' ')));
// console.log(str);


// https://forum.battlebay.net/attachments/unicode-table-png.22584/
// console.log('ab' === 'aB');
// 
// **************************************** Практика ****************************** //

// Task - 1

// Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль кількість та загальну вартість за кожен продукт.

// const apple = '🍎';

// const appleQuantity = 8;

// const applePrice = 34;
// const total = appleQuantity * applePrice
// const  appleMessage = `Total purchase, price ${appleQuantity * applePrice}`;
// console.log(appleMessage);

// const cherry = '🍒';

// const cherryQuantity = 3;

// const cherryPrice = 72;

// const cherryMessage = `${cherry} total cost ${cherryQuantity * cherryPrice}`;

// console.log(cherryMessage);

// Task - 2

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 1441;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// // console.log(minutes);
// const result = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2, '0')}`
// console.log(result);

// Task - 3

// Виконай рефакторинг коду щоб уникнути помилок

// const name = 'Harry'
// const message = `Hello my name is ${name}`
// console.log(message);

// const delivery = 25;
// const price = 190;
// const message = `Total purchase, price ${delivery + price}`;
// console.log(message);

// Task - 4
// Виконай рефакторинг коду так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = null;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);


// const message = prompt('Enter your name')
// const result = message ?? '😥'
// console.log(result);