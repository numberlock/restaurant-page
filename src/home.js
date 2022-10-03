"use strict";

export default function createHome() {
  let createDiv = document.createElement("div");

  createDiv.classList.add("container");
  let createH1 = document.createElement("h1");
  createH1.textContent = "Mamma Mia Pizzeria";
  let span = document.createElement("span");
  span.textContent =
    "Tastes like heaven and is sometimes stated to be better than a relationship";
  let img = document.createElement("img");
  img.src = "/src/banner.webp";
  createDiv.append(createH1, span, img);
  content.appendChild(createDiv);
}
