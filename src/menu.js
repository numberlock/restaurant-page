"use strict";
import stockPizza from "./stock-pizza.webp";

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
  imgDiv.src = stockPizza;

  createDiv.append(nameDiv, descDiv, priceDiv, imgDiv);
  content.appendChild(createDiv);
}
