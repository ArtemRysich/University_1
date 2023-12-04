// Скалярні типи

// let isOpen: boolean = true;
// isOpen = false;

// let value: number = 10;
// let message: string = "Hello world";
// let empty: null = null;
// let missing: undefined = undefined;

// ************ any ********* //

let some: any = 4;
// some = "Hello";
// some = true;

// unknow

// let age: unknown = 20;
// console.log(age);
// age = "twenty";
// console.log(age);

// let value: number;
// value = age;

// ПЕРЕРВА ДО 12.05

//  Tuple

// let arr : [number, string];

// arr = [11,"hello"];
// arr = [11,"hello", 12];

// arr.push(12)
// arr.unshift('my name')
// console.log(arr);

// let arr: [boolean, ...string[]];

// arr = [true, "a", "b", "c", 12];

// enum
// enum DayOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
// }

// console.log(DayOfWeek[DayOfWeek.Monday]);

// const enum Discount {
//   Gold = 10,
//   Silver = 8,
//   Bronze = 5,
// }

// console.log(Discount.Silver);

// Unoin Type

// let myValue: string | number ;

// myValue = 'Hello world'

// myValue = 10;

// Custom types

// type Fruit = {
//     id : number,
//     name: string,
//     price?: number
// }

// const apple : Fruit = {
//   id: 1,
//   name: "Apple",
//   price: 30,
// };

// const banana : Fruit = {
//   id: 2,
//   name: "Apple",
//   price: 20,
// };

// TASK -1
// Створіть перечислення Colors для основних кольорів (червоний, зелений, синій). Напишіть функцію getColorHex, яка приймає значення з перечислення і повертає відповідний шестнадцятковий код кольору.

// enum Colors {
//   Red = "#FF0000",
//   Green = "#00FF00",
//   Blues = "#0000FF",
// }

// function getColorHex(color: string): string {
//   return Colors[color];
// }

// console.log(`Hex code Green`, getColorHex('Green'));

// Task - 2
// Створи функції яка приймає ім'я та вік, а потім повертає кортеж, де перший елемент має тип string (ім'я), а другий елемент має тип number (вік).

// function createPerson(name: string, age: number): [string, number] {
//   return [name, age];
// }

// console.log(createPerson("Alice", 30));

// Task-3
// створіть функцію, яка приймає об'єкт студента та обчислює його середній бал.

// type Student = {
//   name: string;
//   grades: number[];
// };

// const exampleStudent: Student = {
//   name: "Alice",
//   grades: [90, 85, 92, 88],
// };

// function calculateAverage(student: Student): number {
//   return student.grades.reduce(
//     (acc: number, item: number, idx: number, arr: number[]): number => {
//       acc += item;

//       return arr.length - 1 === idx ? acc / arr.length : acc;
//     }
//   );
// }
// console.log(calculateAverage(exampleStudent));

// Task-4
// Створіть користувацький тип для представлення інформації про замовлення в інтернет-магазині. Кожен замовлення має номер (рядок), список товарів (масив об'єктів з назвою та ціною) та статус (рядок: "в обробці", "відправлено", "доставлено" тощо). Створіть функції для обчислення сумарної вартості замовлення та виведення інформації про статус замовлення.

type OrderItem = {
  name: string;
  price: number;
};

type Order = {
  number: string;
  items: OrderItem[];
  status: string;
};

const exampleOrder: Order = {
  number: "12345",
  items: [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 30 },
    { name: "Keyboard", price: 50 },
  ],
  status: "in process",
};

function calculateTotal( items : OrderItem[]): number {
  return items.reduce(
    (acc: number, { price }: OrderItem): number => acc + price,
    0
  );
}

function printStatus({ number, status, items }: Order): void {

  console.log(
    `Order - ${number}, status: ${status}, total price ${calculateTotal(items)}`
  );
}
printStatus(exampleOrder);
