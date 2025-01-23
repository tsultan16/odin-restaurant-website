import logoImage from "./images/restaurant-logo.svg";

const content = document.querySelector("#content");

export const addContent =  (HTMLelement) => {
    content.appendChild(HTMLelement);
};


const clearAllContent = () => {
    while (content.lastChild) {
        content.lastChild.remove();
    }
};

export const loadMenuPage = () => {

    // clear out all existing content first
    clearAllContent();

    // render content elements one by one
    const header = document.createElement("h1");
    header.textContent = "Menu";
    content.appendChild(header);
    
    const logo_container = document.createElement("div");
    logo_container.id = "logo-container";
    const logo = document.createElement("img");
    logo.src = logoImage;
    logo.id = "logo";
    logo_container.appendChild(logo)
    addContent(logo_container);
    
    createMenuSection("Appetizers");
    createMenuSection("Soups & Salads");
    createMenuSection("Main Courses");
    createMenuSection("Desserts");
   
    // const opening_hours = document.createElement("div");
    // opening_hours.id = "opening-hours";
    // const opening_hours_header = document.createElement("h3");
    // opening_hours_header.textContent = "Opening Hours";
    // const opening_hours_list = document.createElement("ul");
    // const days = [["Monday", 5, 12], ["Tuesday", 5, 12], ["Wednesday", 5, 12], ["Thursday", 5, 12], ["Friday", 5, 2], ["Saturday", 5, 2]];
    // days.forEach( (e) => {
    //     opening_hours_list.appendChild(dayListItem(e[0], e[1], e[2]));
    // });
    // opening_hours.appendChild(opening_hours_header);
    // opening_hours.appendChild(opening_hours_list);
    // addContent(opening_hours);

};



const createMenuSection = (name) => {
    const tagline_header = document.createElement("h2");
    const tagline = document.createElement("em");
    tagline.textContent = name;
    tagline_header.appendChild(tagline);
    addContent(tagline_header); 

};








