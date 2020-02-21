const renderContactContent = () => {
    const container = document.querySelector("#content");

    const contact = document.createElement("div");
    contact.className = "contact";

    const contactTitle = document.createElement("h1");
    contactTitle.id = "contact-header";
    contactTitle.textContent =  "Contact Us";

    contact.appendChild(contactTitle);

    const contactInfo = document.createElement("p");
    contactInfo.className = "contact-info";
    contactInfo.innerHTML = "1111 Broad Way <br> Sacramento, CA <br> (916)-111-1111";

    contact.appendChild(contactInfo);
    
    container.appendChild(contact);
}

export { renderContactContent }