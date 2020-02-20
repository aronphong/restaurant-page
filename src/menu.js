const renderMenuContent = () => {
    const container = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    menuContainer.className = "menu";

    const homeTitle = document.createElement("h1");
    homeTitle.id = "menu-header";
    homeTitle.textContent = "Menu";

    menuContainer.appendChild(homeTitle);

    const menuStaples = document.createElement("div");
    menuStaples.className = "menu-category";
    menuStaples.id = "menu-Staples";

    const staplesTitle = document.createElement("h2");
    staplesTitle.className = "menu-title";
    staplesTitle.textContent = "Our Staples";

    menuStaples.appendChild(staplesTitle);


    const menuAppetizer = document.createElement("div");
    menuAppetizer.className = "menu-category";
    menuAppetizer.id = "menu-appetizer";

    const appetizerTitle = document.createElement("h2");
    appetizerTitle.className = "menu-title";
    appetizerTitle.textContent = "Appetizers";

    menuAppetizer.appendChild(appetizerTitle);

    menuContainer.appendChild(menuStaples);
    menuContainer.appendChild(menuAppetizer);


    container.appendChild(menuContainer);
};

export { renderMenuContent };