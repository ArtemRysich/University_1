// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// 1 Кнопка "Load More"
// 2 Infinity scroll (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

// *********************** Кнопка "Load More" ************************** \\

// const elements = {
//   list: document.querySelector(".js-movie-list"),
//   btnLoad: document.querySelector(".js-load-more"),
// };

// let page = 499;

// elements.btnLoad.addEventListener("click", handlerLoadMore);

// function handlerLoadMore() {
//   page += 1;
//   serviceMovie(page).then((data) => {
//     elements.list.insertAdjacentHTML("beforeend", createMarkup(data.results));

//     if (data.page >= 500 || data.page >= data.total_pages) {
//       elements.btnLoad.classList.replace("load-more", "load-more-hidden");
//     }
//   });
// }

// function serviceMovie(page = 1) {
//   const BASE_URL = "https://api.themoviedb.org/3";
//   const END_POINT = "trending/movie/week";
//   const API_KEY = "345007f9ab440e5b86cef51be6397df1";

//   const params = new URLSearchParams({
//     api_key: API_KEY,
//     page, // page: 1
//   });

//   console.log(params.toString());

//   return fetch(`${BASE_URL}/${END_POINT}?${params}`).then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText || "Error");
//     }

//     return resp.json();
//   });
// }
// serviceMovie()
//   .then((data) => {
//     elements.list.insertAdjacentHTML("afterbegin", createMarkup(data.results));

//     if (data.page < data.total_pages) {
//       elements.btnLoad.classList.replace("load-more-hidden", "load-more");
//     }
//   })
//   .catch((err) => console.log(err));

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, original_title, release_date, vote_average }) => `
//     <li class="movie-card">
//         <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" />
//         <h2>${original_title}</h2>
//         <div class="movie-info">
//             <p>Release Date: ${release_date}</p>
//             <p>Vote Average: ${vote_average}</p>
//         </div>
//     </li>
//     `
//     )
//     .join("");
// }

// ********************************Infinity scroll ********************** \\
const elements = {
  list: document.querySelector(".js-movie-list"),
  guard: document.querySelector(".js-guard"),
};

const options = {
  root: null,
  rootMargin: "300px",
  threshold: 1.0,
};
const observer = new IntersectionObserver(handlerLoadMore, options);
let page = 1;

function serviceMovie(page = 1) {
  const BASE_URL = "https://api.themoviedb.org/3";
  const END_POINT = "trending/movie/week";
  const API_KEY = "345007f9ab440e5b86cef51be6397df1";

  const params = new URLSearchParams({
    api_key: API_KEY,
    page, // page: 1
  });

  console.log(params.toString());

  return fetch(`${BASE_URL}/${END_POINT}?${params}`).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText || "Error");
    }

    return resp.json();
  });
}
serviceMovie()
  .then((data) => {
    elements.list.insertAdjacentHTML("afterbegin", createMarkup(data.results));

    if (data.page < data.total_pages) {
      observer.observe(elements.guard);
    }
  })
  .catch((err) => console.log(err));

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, original_title, release_date, vote_average }) => `
      <li class="movie-card">
          <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" />
          <h2>${original_title}</h2>
          <div class="movie-info">
              <p>Release Date: ${release_date}</p>
              <p>Vote Average: ${vote_average}</p>
          </div>
      </li>
      `
    )
    .join("");
}

document.addEventListener("scroll", handlerScroll);
let counterScroll = 0;
function handlerScroll() {
  counterScroll += 1;
  console.log("Scroll counter", counterScroll);
}

let counterObserver = 0;
function handlerLoadMore(entries) {
  counterObserver += 1;
  console.log("Observer counter", counterObserver);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      page += 1;
      serviceMovie(page)
        .then((data) => {
          elements.list.insertAdjacentHTML(
            "beforeend",
            createMarkup(data.results)
          );

          if (data.page >= 500 || data.page >= data.total_pages) {
            observer.unobserve(elements.guard);
            // observer.disconnect();
          }
        })
        .catch((err) => console.log(err));
    }
  });
}
