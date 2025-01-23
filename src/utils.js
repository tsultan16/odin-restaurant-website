const content = document.querySelector("#content");

export const addContent =  (HTMLelement) => {
    content.appendChild(HTMLelement);
};

export const dayListItem = (day, open_hour, close_hour) => {
    const item = document.createElement("li");
    item.textContent = `${day} - ${open_hour}pm to ${close_hour}am`;
    return item;
};




