import "./cssFiles/headerFooter.css";
import "./cssFiles/homePage.css";
import "./cssFiles/menu.css";
import "./cssFiles/contactUs.css";

import pageLoad from "./homepage.js";
import { menuhead, foodList } from "./menu.js";
import { contactAddress, addressMap, contactForm } from "./contactUs.js";



pageLoad();

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        if (button.className == "home") {
            content.innerHTML = "";
            pageLoad();
        }
        if (button.className == "menu") {
            content.innerHTML = "";
            menuhead();
            foodList();
        }
        if (button.className == "contactUs") {
            content.innerHTML = "";
            contactAddress();
            addressMap();
            contactForm();
        }
    });
});


