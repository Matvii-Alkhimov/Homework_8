// Utils

import dishTpl from "./templates/dish.handlebars";
import menu from "./menu.json";

const elements = {
    listEl: document.querySelector(".js-menu"),
    checkBoxEl: document.querySelector(".theme-switch__toggle"),
    bodyEl: document.querySelector("body")
}

const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

// Picking Light/Dark Mode 

const mode = localStorage.getItem("light-mode");
mode === theme.DARK ? elements.bodyEl.classList.add(theme.DARK) : elements.bodyEl.classList.add(theme.LIGHT);
mode === theme.DARK ? elements.checkBoxEl.setAttribute("checked", "true") : elements.checkBoxEl.setAttribute("checked", "false");



// Dishes

elements.listEl.innerHTML = dishTpl(menu);

elements.menuItems = Array.from(document.querySelectorAll(".menu__item"));
elements.ingredientsLists = Array.from(document.querySelectorAll(".tag-list"));

elements.menuItems.forEach((item) => {
    const index = elements.menuItems.indexOf(item);

    elements.ingredientsLists[index].innerHTML = `
        <li class="tag-list__item">${menu[index].ingredients[0]}</li>
        <li class="tag-list__item">${menu[index].ingredients[1]}</li>
        <li class="tag-list__item">${menu[index].ingredients[2]}</li>
        <li class="tag-list__item">${menu[index].ingredients[3]}</li>
        <li class="tag-list__item">${menu[index].ingredients[4]}</li>
        <li class="tag-list__item">${menu[index].ingredients[5]}</li>
    `
});

// Light Mode

elements.checkBoxEl.addEventListener("change", changeLightModeFunction);

function changeLightModeFunction() {
    elements.bodyEl.classList.toggle(theme.DARK);
    elements.bodyEl.classList.toggle(theme.LIGHT);

    elements.bodyEl.classList.contains(theme.LIGHT) ? localStorage.setItem("light-mode", theme.LIGHT) : localStorage.setItem("light-mode", theme.DARK); 
}