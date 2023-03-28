import { sukhofrukty } from "./data_sukhofrukty.js";

const container = document.querySelector(".sukhofrukty__list");
const markup = createMarkup(sukhofrukty);

function createMarkup(sukhofrukty) {
    return sukhofrukty
    .map(({src, alt, title, description, measure, price}) => {
        return `
        <li class="sukhofrukty__item">
        <img src="${src}" alt="${alt}">
        <h2 class="sukhofrukty__name">${title}</h2>
        <p class="sukhofrukty__description">${description}</p>
        <p class="sukhofrukty__property">Міра: ${measure}<br>Ціна: ${price} грн</p>
        <button type="button" class="sukhofrukty__button">Оформити замовлення</button>
        </li>`;
    })
    .join("");
}

container.insertAdjacentHTML("beforeend", markup);
