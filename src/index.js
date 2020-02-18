import { renderPageContent } from "./page-content.js";

renderPageContent();

const container = document.querySelector("#content");

const banner = document.createElement("img");
banner.src = "";

const navbar = document.createElement("nav");

const title = document.createElement("h1");
title.textContent = "The Stumble Inn";



container.appendChild(title);