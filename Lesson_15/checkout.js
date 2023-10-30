const elements = {
  list: document.querySelector(".js-list"),
  cost: document.querySelector(".js-cost"),
  clearBtn: document.querySelector(".js-clear"),
};

const LS_KEY = "checkout";
const products = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];

let totalCost;

if (products.length) {
  elements.clearBtn.hidden = false;
  totalCost = products.reduce((acc, { qty, price }) => acc + qty * price, 0);
}

elements.cost.textContent = totalCost
  ? `Total cost ${totalCost}`
  : "Your basket is empty";
elements.list.insertAdjacentHTML("afterbegin", createMarkup(products));
elements.clearBtn.addEventListener("click", handlerClearBasket);

function createMarkup(arr) {
  return arr
    .map(
      ({ img, name, qty, price }) => `
    <li class="cart-item">
        <img src="${img}" alt="${name}">
        <h2>${name}</h2>
        <p>Quantity: ${qty}</p>
        <p>Total price: ${qty * price}</p>
    </li>`
    )
    .join("");
}

function handlerClearBasket() {
  localStorage.removeItem(LS_KEY);
  location.href = "./index.html";
}
