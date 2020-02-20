import { renderPageContent } from "./page-content.js";
import { renderMenuContent } from "./menu.js";
import { renderContactContent } from "./contact.js"

renderPageContent();
renderMenuContent();

const container = document.querySelector("#content");

let menu = document.querySelector("#nav-menu");
menu.addEventListener('click', () => {
    container.removeChild(container.lastChild);
    renderMenuContent();
});

let contact = document.querySelector("#nav-contact");
contact.addEventListener('click', () => {
    container.removeChild(container.lastChild);
    renderContactContent();
})
