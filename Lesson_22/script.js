// ***************** Конструкція async await ***************** \\

// function serviceCountry() {
//   console.log("before fetch");
//   fetch("https://restcountries.com/v3.1/name/Ukraine")
//     .then((resp) => resp.json())
//     .then((data) => {
//         console.log(data);
//         fetch(`http://someurl/${data.capital[0]}`)
//         .then(resp => resp.json())
//         .then(data => console.log(data))
//     });
//   console.log("after fetch");
// }
// console.log("before function");

// async function serviceCountry() {
//   console.log("before fetch");
//   const resp = await fetch("https://restcountries.com/v3.1/name/Ukraine");
//   console.log('resp',resp);
//   const data = await resp.json();
//   console.log('data', data);
//   console.log("after fetch");
// }
// serviceCountry();

// console.log("after function");

// ***************** Асинхрона функція завжди поверне проміс ***************** \\

//  async function serviceCountry(){

// }

// console.log(serviceCountry());

// *****************Асинхронною функціює може бути будь який різновид функції ***************** \\

// ****** Arrow function ****** \\

// const serviceCountry = async () => {
//   const resp = await fetch("https://restcountries.com/v3.1/name/Ukraine");
//   const data = await resp.json();
//   console.log(data);
// };
// serviceCountry()
// ****** Function expression ****** \\

// const serviceCountry = async function () {
//   const resp = await fetch("https://restcountries.com/v3.1/name/Ukraine");
//   const data = await resp.json();
//   console.log(data);
// };
// serviceCountry()

// ****** Function declaration ****** \\

// async function serviceCountry() {
//   const resp = await fetch("https://restcountries.com/v3.1/name/Ukraine");
//   const data = await resp.json();
//   console.log(data);
// }
// serviceCountry()

// ****** Object method ****** \\

// const service = {
//   countryName: "Ukraine",
//   async serviceCountry() {
//     const resp = await fetch(
//       `https://restcountries.com/v3.1/name/${this.countryName}`
//     );
//     const data = await resp.json();
//     console.log(data);
//   },
// };
// service.serviceCountry();

// ****** ES6 Class ****** \\

// class Service {
//   constructor(country) {
//     this.countryName = country;
//   }

//   async serviceCountry(){
//     const resp = await fetch(
//         `https://restcountries.com/v3.1/name/${this.countryName}`
//       );
//       const data = await resp.json();
//       console.log(data);
//   }
// }

// const ukraine = new Service('Ukraine')

// console.log(ukraine);
// ukraine.serviceCountry()

// ************ Обробка за допомогою then та catch ************ \\

// async function serviceCountry() {
//   const resp = await fetch("https://restcountries.com/v3.1/name/Ukraine");

//   if (!resp.ok) {
//     throw new Error("Some error");
//   }

//   const data = await resp.json();

//   return data;
// }
// serviceCountry()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// async function serviceCountry() {
//   try {
//     const resp = await fetch("https://restcountries.com/v3.1/name/weryuiop");

//     if (!resp.ok) {
//       throw new Error("Some error");
//     }

//     const data = await resp.json();

//     return data;
//   } catch (err) {
//     console.log(err);

//     // throw new Error("Some error");
//   }
// }

// serviceCountry()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ************ Обробка за допомогою try та catch ************ \\

// async function serviceCountry() {
//   try {
//     const resp = await fetch("https://restcountries.com/v3.1/name/Ukraine");

//     if (!resp.ok) {
//       throw new Error("Some error");
//     }

//     const data = await resp.json();
//   } catch (err) {
//     console.log(err);
//   }
// }
// serviceCountry();

// Якщо маємо наприклад щось подібне:
// async function fetchSmth(url) {
//   try {
//     const resp = await fetch(url);
//     const data = await resp.json();
//     renderMarkup(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// тут return немає. Якщо переписати на async await  - який метод використовуємо?

// // ************ Паралельні та послідовні запити ************ \\

// *********** Послідовні *********** \\

// async function serviceCountries() {
//   const resp1 = await fetch("https://restcountries.com/v3.1/name/Ukraine");
//   const resp2 = await fetch("https://restcountries.com/v3.1/name/Greece");
//   const resp3 = await fetch("https://restcountries.com/v3.1/name/France");
//   console.log(resp1);
//   console.log(resp2);
//   console.log(resp3);
// }
// serviceCountries();
// *********** Паралельні *********** \\

// async function serviceCountries() {
//   const countries = ["Ukraine", "Greece", "France", "qwertyu"];

//   const responses = countries.map(async (country) => {
//     const resp = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     if (!resp.ok) {
//       throw new Error("error");
//     }
//     return resp.json();
//   });

//   const data = await Promise.allSettled(responses);
//   console.log(data);
// }
// serviceCountries();

// ********************* Практика ********************* \\
// Створи додаток для туристичного агенства
// Користувач має форму в яку може додавати довільну кількість полів
// В кожне поле він вводить назву країни
// Після сабміту форми форма відправляє запит на бекенд та отримує назви столиць цих країн
// На основі відповіді попереднього сервісу потрібно створити прогноз погоди по кожній столиці
// Використовуй паралельні запити
// Бекенд для пошуку країн https://restcountries.com/
// Бекенд для прогнозу погоди  https://www.weatherapi.com/docs/   КЛЮЧ ВАЛІДНИЙ 21 ДЕНЬ !!!!!

// Приклад роботи https://ibb.co/6g3YYs8
// 6410346f89264d6e919165208231505

const elements = {
  form: document.querySelector(".js-search"),
  formContainer: document.querySelector(".js-form-container"),
  btnAddField: document.querySelector(".js-add"),
  list: document.querySelector(".js-list"),
};

elements.btnAddField.addEventListener("click", handlerAddField);
elements.form.addEventListener("submit", handlerSubmit);

async function handlerSubmit(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.currentTarget);
  const countries = formData
    .getAll("country")
    .map((item) => item.trim().toLowerCase())
    .filter((item) => item)
    .filter((item, idx, arr) => arr.indexOf(item) === idx);

  try {
    const capitals = await serviceCountries(countries);
    const weather = await serviceWeather(capitals);

    elements.list.innerHTML = createMarkup(weather);
    elements.formContainer.innerHTML = '<input type="text" name="country" />';
  } catch (err) {
    console.log(err);
  }
}

function createMarkup(arr) {
  return arr
    .map(
      ({ temp_c, icon, text, name, country }) => `
    <li>
        <img src="${icon}" alt="${text}">
        <h2>${country}</h2>
        <h2>${name}</h2>
        <p>${text}</p>
        <p class="temp">${temp_c} °C</p>
    </li>
    `
    )
    .join("");
}

async function serviceWeather(capitals) {
  const responses = capitals.map(async (capital) => {
    const params = new URLSearchParams({
      key: "6410346f89264d6e919165208231505",
      q: capital,
      lang: "uk",
    });
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?${params}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });

  const data = await Promise.allSettled(responses);
  console.log(data);
  return data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value: { current, location } }) => {
      const {
        temp_c,
        condition: { icon, text },
      } = current;

      const { name, country } = location;

      return { temp_c, icon, text, name, country };
    });
}

async function serviceCountries(countries) {
  const responses = countries.map(async (country) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });

  const data = await Promise.allSettled(responses);
  return data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value[0].capital[0]);
}

function handlerAddField() {
  elements.formContainer.insertAdjacentHTML(
    "beforeend",
    '<input type="text" name="country" />'
  );
}
