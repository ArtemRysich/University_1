// *********Links********* \\
// https://www.postman.com/downloads/
// https://rickandmortyapi.com/documentation
// https://www.weatherapi.com/docs/
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest

// Приклад документації до API
// https://rickandmortyapi.com/documentation/#rest

// *********Показати роботу з Postman********* \\
// https://www.postman.com/downloads/

// *********Fetch********* \\

// fetch("https://rickandmortyapi.com/api/character")
//   .then((resp) => {
//     console.log(resp);
//     if (!resp.ok) {
//       throw new Error('Custom error log 😫');
//     }
//     return resp.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// *********Обробка помилок та парсинг відповіді********* \\

// CORS

// fetch('https://common-api.rozetka.com.ua/v2/fat-menu/full?front-type=xl&country=UA&lang=ua&r=0.7297302207424572')

// ***************Практика*************** \\

// Потрібно створити функціонал для отримання прогнозу погоди в місті.
// Використай публічне API https://www.weatherapi.com/docs/
// Використовуй ендпоінт Forecast для того, щоб отримати прогноз погоди на декілька днів.

// Створи форму в яку користувач:
// 1 вводить назву міста.
// 2 обирає на яку кількість днів він хоче отримати прогноз погоди (3, 5 та 7 днів).
// (Іноді параметр не працює в такому випадку можна зробити пошук на 1, 2 та 3 дні)
// Приклад форми https://prnt.sc/kFmLOj6gBdv-

// Після сабміту форми відмалюй картки з інформацією отриманою з бекенду.
// Картка має містити відомості про:
// 1 Зображення з погодою (icon)
// 2 Текст з погодою (text)
// 3 Дату (date)
// 4 Середню температуру в Цельсія (avgtemp_c)
// Приклад картки https://prnt.sc/h_p-A6Hty-i-

const elements = {
  form: document.querySelector(".js-search-form"),
  list: document.querySelector(".js-list"),
};

elements.form.addEventListener("submit", handlerForecast);

function handlerForecast(evt) {
  evt.preventDefault();

  const { city, days } = evt.currentTarget.elements;

  serviceWeather(city.value, days.value)
    .then((data) => {
      elements.list.innerHTML = createMarkup(
        data.forecast.forecastday,
        data.location
      );
    })
    .catch((err) => {
      elements.list.innerHTML =
        '<li class="weather-card"><img src="https://repository-images.githubusercontent.com/627560142/41fad3ef-09ac-4e99-a6b7-bacf592b3142" alt="weather" width="500"/></li>';
      console.log(err);
    });
}

function serviceWeather(city = "", days = "0") {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const END_POINT = "/forecast.json";
  const API_KEY = "6410346f89264d6e919165208231505";

  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    days: days,
    lang: "uk",
  });

  //   console.log(params.toString());
  return fetch(`${BASE_URL}${END_POINT}?${params}`).then((resp) => {
    console.log(resp);
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
  //   fetch(`${BASE_URL}${END_POINT}?key=${API_KEY}&q=Paris&days=2&lang=uk`)
}

function createMarkup(arr, location) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) => `
  <li class="weather-card">
    <img src="${icon}" alt="${text}" class="weather-icon" />
    <h2 class="date">${location.name}</h2>
    <h3 class="date">${location.country}</h3>
    <h4 class="date">${date}</h4>
    <h4 class="weather-text">${text}</h4>
    <h4 class="temperature">${avgtemp_c} °C</h4>
</li>`
    )
    .join("");
}
