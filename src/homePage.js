import logoImage from "./images/restaurant-logo.svg";

const content = document.querySelector("#content");

export const addContent =  (HTMLelement) => {
    content.appendChild(HTMLelement);
};

export const dayListItem = (day, open_hour, close_hour) => {
    const item = document.createElement("li");
    item.textContent = `${day} - ${open_hour}pm to ${close_hour}am`;
    return item;
};

const clearAllContent = () => {
    while (content.lastChild) {
        content.lastChild.remove();
    }
};

export const loadHomePage = () => {

    // clear out all existing content first
    clearAllContent();

    const header = document.createElement("h1");
    header.textContent = "Don Giovanni's";
    content.appendChild(header);
    
    const logo_container = document.createElement("div");
    logo_container.id = "logo-container";
    const logo = document.createElement("img");
    logo.src = logoImage;
    logo.id = "logo";
    logo_container.appendChild(logo)
    addContent(logo_container);
    
    const tagline_header = document.createElement("h2");
    const tagline = document.createElement("em");
    tagline.textContent = "Savor the Heart of Italy, One Bite at a Time.";
    tagline_header.appendChild(tagline);
    addContent(tagline_header); 
    
    const desc = document.createElement("p");
    desc.textContent = "At Don Giovanni's, we bring the authentic flavors of Italy to your table. From handcrafted pastas to wood-fired pizzas, every dish is prepared with the finest ingredients and a passion for tradition. Whether you're celebrating a special occasion or craving a comforting meal, our warm ambiance and rich culinary heritage promise an unforgettable dining experience. Bon appetit!"
    addContent(desc);
    
    const opening_hours = document.createElement("div");
    opening_hours.id = "opening-hours";
    const opening_hours_header = document.createElement("h3");
    opening_hours_header.textContent = "Opening Hours";
    const opening_hours_list = document.createElement("ul");
    const days = [["Monday", 5, 12], ["Tuesday", 5, 12], ["Wednesday", 5, 12], ["Thursday", 5, 12], ["Friday", 5, 2], ["Saturday", 5, 2]];
    days.forEach( (e) => {
        opening_hours_list.appendChild(dayListItem(e[0], e[1], e[2]));
    });
    opening_hours.appendChild(opening_hours_header);
    opening_hours.appendChild(opening_hours_list);
    addContent(opening_hours);

};




