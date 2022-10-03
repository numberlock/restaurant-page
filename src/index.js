"use strict";
import "./style.css";
import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

const content = document.querySelector("#content");
const tabHome = document.querySelector(".tab-home");
const tabMenu = document.querySelector(".tab-menu");
const tabContact = document.querySelector(".tab-contact");

function clearDiv() {
  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }
}

tabHome.addEventListener("click", () => {
  clearDiv();
  createHome();
});
tabContact.addEventListener("click", () => {
  clearDiv();
  createContact();
});
tabMenu.addEventListener("click", () => {
  clearDiv();
  createMenu("CHEESE", "Tomato sauce, diced mozzarella, grana padano.", "10$");
  createMenu(
    "PEPPERONI",
    "Tomato sauce, diced mozzarella, pepperoni, grana padano.",
    "14$"
  );
  createMenu(
    "MARGHERITA",
    "Tomato sauce, fresh mozzarella, basil, extra virgin olive oil, grana padano.",
    "10$"
  );
  createMenu(
    "SALAMI",
    "Tomato sauce, fresh mozzarella, salami, basil, grana padano.",
    "15$"
  );
  createMenu(
    "VEGETARIAN",
    "Diced mozzarella, mushrooms, garlic, extra virgin olive oil, spinach, red onions, artichokes,sun-dried tomatoes, goat cheese, grana padano.",
    "13$"
  );
  createMenu(
    "SMOKED SALMON",
    "Olive oil, mozzarella, dill, garlic, smoked salmon, red onions, tartar sauce, grana padano.",
    "16$"
  );
});

createHome();
