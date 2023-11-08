//*********Приклад роботи синхронного та асинхронного JS**************\\

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve("C").then((value) => console.log(value));

// console.log("D");

//*********Поділення асинхронного JS на мікро та макро процеси**************\\

// ******Мікро процеси***** \\
// Promise
// Observer

// ******Макро процеси****** \\
// setTimeout
// setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
// setImmediate
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
// requestAnimationFrame

//*********Приклад роботи синхронного та асинхронного JS**************\\
// Пронумеруй виклики методів відповідно до порядку їх виконання

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.reject("C").then((value) => console.log(value)).catch(err => console.log(err));
// Promise.resolve("D").then((value) => console.log(value));

// setTimeout(() => console.log("E"), 0);

// console.log("F");

//*************** Promise *******************\\

// ****Створення Promise**** \\
// const promise = new Promise((resolve, reject) => {
//   const random = Math.random();
//   setTimeout(() => {
//     if (random > 0.5) {
//       resolve({ name: "Alice" });
//     } else {
//       reject("😥");
//     }
//   }, 1000);
// });

// console.log(promise);

// // ****Обробка Promise**** \\
// promise
//   .then(
//     (resp) => {
//       console.log(resp);
//       return resp;
//     },
//     (err) => console.log("error in then", err)
//   )
//     .then((data) => {
//       console.log(data.map());
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//   .finally(() => console.log("finally"));

// const value = Promise.reject('Hello').catch(err => err)
// console.log(value);

// ПЕРЕРВА ДО 20.40

// ****************************Практика************************* \\
// Наше завдання написати програмне забезпечення для ігрового автомата
// Для вирішення завдання використай готову розмітку HTML та базову стилізацію
// Після натиснення на кнопку "Start game" в кожному віконці по черзі має з'являтись смайлик з затримкою в 1 секунду ('🤑' або '👿')
// Під час обробки кожного віконця створи масив з Promis-ами в якому кожен з них буде відповідати за своє віконце, після чого оброби даний масив за допомогою методу Promise.allSettled
// Після того як всі віконця були заповнені потрібно щоб скріпт автоматично визначав чи гравець переміг, чи ні. Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
// Виводить модальне вікно з повідомленням про статус гри ('Winner' або 'Loser')
// Для модального вікна використовуй бібліотеку basicLightbox
// Після повторного натискання на кнопку "Start game" поле має очищатись, а гра починатись з початку.

const elements = {
  btnStart: document.querySelector(".js-start"),
  container: document.querySelector(".js-container"),
};

elements.btnStart.addEventListener("click", handlerStartGame);

function handlerStartGame() {
  const promises = [...elements.container.children].map(createPromise);
  Promise.allSettled(promises).then((items) => {
    // 0 * 1000 = 0
    // 1 * 1000 = 1000
    // 2 * 1000 = 2000
    items.forEach((item, idx) => {
      elements.container.children[idx].textContent = "";

      setTimeout(() => {
        elements.container.children[idx].textContent =
          item.value ?? item.reason;

        if (items.length - 1 === idx) {
          const instance = basicLightbox.create(`
	            <h1>${isWinner ? "Winner" : "Loser"}</h1>`);
          instance.show();
        }
      }, (idx + 1) * 1000);
    });

    const isWinner =
      items.every(({ status }) => status === "fulfilled") ||
      items.every(({ status }) => status === "rejected");
  });
}

function createPromise() {
  return new Promise((res, rej) => {
    const random = Math.random();

    if (random > 0.5) {
      res("🤑");
    } else {
      rej("😈");
    }
  });
}
