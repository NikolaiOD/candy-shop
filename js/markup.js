import { sukhofrukty } from "./data_sukhofrukty.js";
import { gorikhi } from "./data_gorikhi.js";
import { candy } from "./data_candy.js";
import { rahat } from "./data_rahat.js";
import { drink } from "./data_drink.js";
import { oil } from "./data_oil.js";

const container = document.querySelector(".product__list");
const markup = createMarkup(gorikhi, sukhofrukty, candy, rahat, drink, oil);

function createMarkup(gorikhi, sukhofrukty, candy, rahat, drink, oil) {
    const title = document.querySelector('.product__title');

    if (title.innerHTML === "СУХОФРУКТИ") {
        return render(sukhofrukty)
    } else if (title.innerHTML === "ГОРІХИ") {
        return render(gorikhi)
    } else if (title.innerHTML === "ХАЛВА, ЦУКЕРКИ") {
        return render(candy)
    } else if (title.innerHTML === "РАХАТ-ЛУКУМ") {
        return render(rahat)
    } else if (title.innerHTML === "КАВА, ЧАЙ") {
        return render(drink)
    } else if (title.innerHTML === "ОЛІЯ ТА ІНШЕ") {
        return render(oil)
    }
};

function render(product) {
    return product
    .map(({src, alt, title, description, measure, price}) => {
        return `
        <li class="product__item">
        <img src="${src}" alt="${alt}">
        <h2 class="product__name">${title}</h2>
        <p class="product__description">${description}</p>
        <p class="product__property">Міра: ${measure}<br>Ціна: ${price} грн</p>
        <button type="button" class="product__button">Оформити замовлення</button>
        </li>`;
    })
    .join("");
}

container.insertAdjacentHTML("beforeend", markup);
