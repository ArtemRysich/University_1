// *******************Generics**********************

// const arr: Array<number> = [1, 2, 3];

// const arr: Array<number | string> = [1, 2, 3, "Hello", "World"];

// const arr: Array<number | string | boolean> = [1, 2, 3, "Hello", "World"];
// arr.push(true)

// console.log(arr);

// БЕЗ Generics
// function logSomeValue(data: number | string): number | string {
//   console.log(data);
//   return data;
// }
// console.log(logSomeValue(10));
// console.log(logSomeValue("10"));

// З Generics
// function logSomeValue<T>(data: T): T  {
//   console.log(data);
//   return data;
// }

// const result = logSomeValue<number>(10);
// const result2 = logSomeValue<string>("10");
// console.log(result);
// console.log(result2);

// function getHalf<T>(data: Array<T>): Array<T> {
//   return data.splice(0, data.length / 2);
// }
// console.log(getHalf([1, 2, 3, 4]));
// console.log(getHalf(["a", "b", "c", "d"]));
// console.log(getHalf(["a", "b", "c", "d", 1, 2, 3, 4, true, false]));

// ********Interface - це визначення кастомного типу даних, дуже подібне до Custom Types*************************.

// Custom Types

// type User = {
//   name: string;
//   city: string;
//   age: number;
// };

// type User = {
//     hobby : "JS" | "TS"
// }

// const user : User= {
//   name: "Alice",
//   city: "Lviv",
//   age: 18,
// };

// Interface

// interface User {
//   name: string;
//   city: string;
//   age: number;
// }

// interface User {
//     hobby: "JS" | "TS"
// }

// const user : User = {
//   name: "Alice",
//   city: "Lviv",
//   age: 18,
//   hobby : "JS"
// };
// console.log(user);

// type hobby = "JS" | "TS"

// interface hobby {
//     name: "JS" | "TS"
// }

// Практика

// Generics
// Створіть функцію reverseArray, яка приймає масив будь-якого типу та повертає його в оберненому порядку.
// Використовуйте Generics, щоб функція була гнучкою і працювала для різних типів масивів.

// const numbers = [1, 2, 3, 4, 5];

// const words = ["apple", "banana", "cherry"];

// function reverseArray<T>(arr: T[]): T[] {
//   return arr.reverse();
// }

// console.log(reverseArray(numbers));
// console.log(reverseArray(words));

// TASK-2
//  створити функцію mergeObjects, яка об'єднує два об'єкти в один, при цьому зберігаючи типи об'єктів.

// interface Person {
//   name: string;
//   age: number;
// }

// interface Address {
//   city: string;
//   zipCode: string;
// }

// const person: Person = { name: "John", age: 30 };
// const address: Address = { city: "New York", zipCode: "10001" };

// function mergeObject<T extends object, U extends object>(obj1: T, obj2: U): T & U {
//   return Object.assign(obj1, obj2);
// }
// console.log(mergeObject(person, address));
// console.log(mergeObject(address, person));

// function mergeObject<T, U>(obj1: T[], obj2: U[]): (T|U)[] {
//   return [...obj1, ...obj2];
// }
// console.log(mergeObject([1, 2, 3, 4], ["a", "b"]));
// console.log(mergeObject(address, person));

// ****************Class*******************
// interface HeroInterface {
//   name: string;
//   heal(): void;
//   attack(target: Hero, damage: number): void;
// }

// class Hero implements HeroInterface {
//   private static HeroCount = 0;
//   static addCountHero(): void {
//     this.HeroCount += 1;
//   }
//   protected potion: number = 5;
//   constructor(public name: string, public health: number) {
//     Hero.addCountHero();
//   }

//   private takeDamage(damage: number): void {
//     this.health -= damage;
//   }

//   heal(): void {
//     if (this.potion > 0) {
//       this.health += 50;
//       this.potion -= 1;
//       return;
//     }

//     console.log("Need more potion");
//   }

//   attack(target: Hero, damage: number): void {
//     console.log(`${this.name} attacks ${target.name} for ${damage} damage`);
//     target.takeDamage(damage);
//   }
// }

// class SuperHero extends Hero {
//   constructor(
//     public name: string,
//     public health: number,
//     public superPower: string
//   ) {
//     super(name, health);
//   }

//   useSuperPower() {
//     this.potion += 1;
//   }
// }

// const hero1 = new Hero("hero1", 200);
// const hero2 = new Hero("hero2", 200);
// const hero3 = new SuperHero("hero3", 200, "Flight");
// hero3.useSuperPower();
// console.log(hero1);
// console.log(hero3);

// console.log(Hero.HeroCount);

// Advanced Types

// typeof

// interface HeroInterface {
//   name: string;
// }
// const hero: HeroInterface = { name: "Hero" };
// let value: string | number = "hello";
// console.log(typeof hero);

// in

// interface MyObject {
//   prop1: string;
//   prop2: number;
//   prop3?: boolean;
// }

// const obj: MyObject = { prop1: "hello", prop2: 22 };
// //  key in object
// console.log('prop3' in obj);

// instanceof
// class Animal {
//   constructor(public name: string) {}
// }

// class Dog extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
// }

// class Cat extends Animal {
//     constructor(name: string) {
//       super(name);
//     }
//   }

//   const dog = new Dog('Tyzik')
//   const cat = new Cat('Barsik')

// //   instance instanceof Class
//   console.log(dog instanceof Animal);
//   console.log(cat instanceof Animal);

// is

// interface Bird {
//   fly(): void;
// }

// interface Fish {
//   swim(): void;
// }

// function isBird(animal: Bird | Fish): animal is Bird {
//   return "fly" in animal;
// }

// const bird: Bird = {
//   fly() {
//     console.log("Fly");
//   },
// };

// const fish: Fish = {
//   swim() {
//     console.log("Swim");
//   },
// };

// console.log(isBird(bird));
// console.log(isBird(fish));

// as

// let someValue: unknown = 'Hello TS'
// const strLength: number = (someValue as string).length
// console.log(strLength);

// function add(a: number, b : number){

// }

// function add(a: number, b: number, c: number){

// }

// function combine(input1: number, input2: number): number;
// function combine(input1: string, input2: string): string;
// function combine(input1: string, input2: number): string;
// function combine(input1: number, input2: string): string;
// function combine(input1: any, input2: any) {
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     return input1 + input2;
//   } else if (typeof input1 === "string" && typeof input2 === "string") {
//     return input1 + input2;
//   } else if (typeof input1 === "string" && typeof input2 === "number") {
//     return input1 + input2;
//   } else if (typeof input1 === "number" && typeof input2 === "string") {
//     return input1 + input2;
//   }
// }

// console.log(combine(1, 2)); // Outputs: 3
// console.log(combine("Hello", "World")); // Outputs: HelloWorld
// console.log(combine("Hello", 2)); // Outputs: Hello2

// class User {
//   //   public value: string | number| boolean

//   constructor(public value?: string | number | boolean) {
//     // this.value = value;
//   }
// }

// const user1 = new User("hello");
// const user2 = new User(11);
// const user3 = new User(true);
// const user4 = new User();

// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);

// interface IBox {
//   x: number;
//   y: number;
//   height: number;
//   width: number;
// }

// class Box {
//   public x: number;
//   public y: number;
//   public height: number;
//   public width: number;

//   constructor();
//   constructor(obj: IBox);
//   constructor(obj?: IBox) {
//     this.x = obj?.x ?? 0;
//     this.y = obj?.y ?? 0;
//     this.height = obj?.height ?? 0;
//     this.width = obj?.width ?? 0;
//   }
// }
// console.log(new Box());