import { renderPageContent } from "./page-content.js";
import { renderMenuContent } from "./menu.js";

renderPageContent();
renderMenuContent();

let home = document.querySelector("#nav-home");
home.addEventListener('click', renderMenuContent);