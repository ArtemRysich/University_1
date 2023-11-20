// ******************** CRUD ******************** \\

// Create - POST
// Read   - GET
// Update - PUT PATCH
// DELETE - DELETE

// ******************** POST - CREATE ******************** \\

// const post = {
//   title: "Hello world",
//   body: "I love JS",
//   userId: 11,
// };

// const options = {
//   method: "POST",
//   body: JSON.stringify(post),
//   headers: {
//     "Content-type": "application/json",
//   },
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// ******************** GET - READ ******************** \\

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ******************** PATCH - UPDATE ******************** \\

// const oldPost = {
//   title: "Hello world",
//   body: "I love JS",
//   userId: 11,
//   id:1
// };

// const newPost = {
//     title: "Hello from GOIT",
//   };

// const result = {
//     title: "Hello from GOIT",
//     body: "I love JS",
//     userId: 11,
//     id:1
// }

// const newPost = {
//   title: "Hello from GOIT",
//   body: 'Test 20:16',
//   authorName: 'TEST USER'
// };

// const options = {
//     method: 'PATCH',
//     body: JSON.stringify(newPost),
//     headers: {
//         "Content-type": "application/json"
//     }
// }

// fetch("https://jsonplaceholder.typicode.com/posts/1", options)
// .then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ******************** PUT - UPDATE ******************** \\

// const oldPost = {
//   title: "Hello world",
//   body: "I love JS",
//   userId: 11,
//   id: 1,
// };

// const newPost = {
//   title: "Hello from GOIT",
// };

// const result = {
//   title: "Hello from GOIT",
//   id: 1,
// };

// 1-101

// 101

// const result = {
//     title: "Hello from GOIT",
//     id: 101,
//   };

// const newPost = {
//     title: "Hello from GOIT",
//   };

//   const options = {
//       method: 'PUT',
//       body: JSON.stringify(newPost),
//       headers: {
//           "Content-type": "application/json"
//       }
//   }

//   fetch("https://jsonplaceholder.typicode.com/posts/1", options)
//   .then((resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }

//       return resp.json();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// ******************** DELETE ******************** \\

// const options = {
//     method: "DELETE",
//     body: {
//         id: 1
//     }
// }

// fetch("https://jsonplaceholder.typicode.com/posts/1", options)

// ******************** Практика ******************** \\

// Завдання - 1.
// Потрібно створи форму "Зв'яжіться зі мною" в якій користувач має можливість залишити заявку для того, щоб з ним зв'язались та відповіли на його питання
// Форма має складатись з таких елементів:
// 1 - Поле для імені.
// 2 - Поле для номера телефону.
// 3 - Поле для адреси електронної пошти.
// 4 - Поле для питання.

// Форма має відправляти дані на бекенд та зберігати їх в базі даних.

// Завдання - 2.
// Реалізуй сторінку для власника бізнесу - після того, як потрапляємо на сторінку потрібно отримати з бази даних всі заявки, які були залишені користувачами

const elements = {
  form: document.querySelector(".js-question"),
};

elements.form.addEventListener("submit", handlerAddQuestion);

function handlerAddQuestion(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.currentTarget);

  const data = {};

  formData.forEach((val, key) => {
    data[key] = val;
  });

  serviceQuestion(data)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

function serviceQuestion(request) {
  const options = {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json",
    },
  };

  return fetch("http://127.0.0.1:3000/api/question", options).then((resp) => {
    if (!resp.ok) {
      throw new Error("Fail 😥");
    }

    return resp.json();
  });
}
