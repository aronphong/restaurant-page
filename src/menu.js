const renderMenuContent = () => {
    const container = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    menuContainer.className = "menu";

    const homeTitle = document.createElement("h1");
    homeTitle.id = "menu-header";
    homeTitle.textContent = "Menu";

    menuContainer.appendChild(homeTitle);

    // create 'staples' menu category
    const menuStaples = document.createElement("div");
    menuStaples.className = "menu-category";
    menuStaples.id = "menu-Staples";

    const staplesTitle = document.createElement("h2");
    staplesTitle.className = "menu-title";
    staplesTitle.textContent = "Our Staples";
    menuStaples.appendChild(staplesTitle);

    const staplesItem1 = document.createElement("p");
    staplesItem1.className = "menu-item";
    staplesItem1.innerHTML = "<b>Flapjacks</b> - Our buttermilk battter, warm syrup, diced fruit, whipped butter <br>";

    const staplesItem2 = document.createElement("p");
    staplesItem2.className = "menu-item";
    staplesItem2.innerHTML = "<b>Breakfast Burrito</b> - House chorizo, scrambled eggs, cheddar, potato <br>";
    

    const staplesItem3 = document.createElement("p");
    staplesItem3.className = "menu-item";
    staplesItem3.innerHTML = "<b>Biscuit, bacon & gravy</b> - Warm biscuit, bacon, our bacon gravy, and two eggs <br>";

    menuStaples.appendChild(staplesItem1);
    menuStaples.appendChild(staplesItem2);
    menuStaples.appendChild(staplesItem3);


    // create 'sides' menu category
    const menuSides = document.createElement("div");
    menuSides.className = "menu-category";
    menuSides.id = "menu-sides";

    const sidesTitle = document.createElement("h2");
    sidesTitle.className = "menu-title";
    sidesTitle.textContent = "Sides";
    menuSides.appendChild(sidesTitle);

    const sidesItem1 = document.createElement("p");
    sidesItem1.className = "menu-item";
    sidesItem1.innerHTML = "<b>Avocado Toast</b> <br>";

    const sidesItem2 = document.createElement("p");
    sidesItem2.className = "menu-item";
    sidesItem2.innerHTML = "<b>Country potatoes</b> <br>";

    const sidesItem3 = document.createElement("p");
    sidesItem3.className = "menu-item";
    sidesItem3.innerHTML = "<b>Biscuit</b> <br>";


    menuSides.appendChild(sidesItem1);
    menuSides.appendChild(sidesItem2);
    menuSides.appendChild(sidesItem3);

    menuContainer.appendChild(menuStaples);
    menuContainer.appendChild(menuSides);


    container.appendChild(menuContainer);
};

export { renderMenuContent };