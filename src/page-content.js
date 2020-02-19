const renderPageContent = () => {

    const container = document.querySelector("#content");

    // create nav bar
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    const liHome = document.createElement("li");
    const aHome = document.createElement("a");
    aHome.id = "nav-home";
    aHome.textContent = "Home";
    liHome.appendChild(aHome);
    ul.appendChild(liHome);

    const liMenu = document.createElement("li");
    const aMenu = document. createElement("a");
    aMenu.textContent = "Menu";
    liMenu.appendChild(aMenu);
    ul.appendChild(liMenu);


    const liContact = document.createElement("li");
    const aContact = document.createElement("a");
    aContact.textContent = "Contact";
    liContact.appendChild(aContact);
    ul.appendChild(liContact);

    nav.appendChild(ul);
    container.appendChild(nav);

    const header = document.createElement("header");
    const headerTitle = document.createElement("h1");
    headerTitle.id = "header-title";
    headerTitle.textContent = "Breakfast Inn"

    const headerSubText = document.createElement("h3");
    headerSubText.id = "header-subtext";
    headerSubText.textContent = "- Diner by Aron Phong -"

    header.appendChild(headerTitle);
    header.appendChild(headerSubText);
    container.appendChild(header);

    const title = document.createElement("h1");
    title.textContent = "The Breakfast Inn";

    nav.appendChild(title);


};

export { renderPageContent} ;