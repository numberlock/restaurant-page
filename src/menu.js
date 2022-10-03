"use strict";

export default function createMenu(name, description, price) {
  let createDiv = document.createElement("div");
  createDiv.classList.add("container");
  let nameDiv = document.createElement("div");
  nameDiv.textContent = `${name}`;
  let descDiv = document.createElement("div");
  descDiv.textContent = `${description}`;
  let priceDiv = document.createElement("div");
  priceDiv.textContent = `${price}`;
  let imgDiv = document.createElement("img");
  imgDiv.src = "/src/stock-pizza.webp";

  createDiv.append(nameDiv, descDiv, priceDiv, imgDiv);
  content.appendChild(createDiv);
}

/* createMenu("CHEESE", "Tomato sauce, diced mozzarella, grana padano.", "10$");
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
 */
