export default function createContact() {
  let createDiv = document.createElement("div");
  createDiv.classList.add("container");
  let createTitle = document.createElement("Div");
  createTitle.textContent = "ORDER NOW!";
  let createPhoneNum = document.createElement("Div");
  createPhoneNum.textContent = "+351 555 555 555";
  let createEmail = document.createElement("Div");
  createEmail.textContent = "order@mammapizzeria.com";

  createDiv.append(createTitle, createPhoneNum, createEmail);
  content.appendChild(createDiv);
}
