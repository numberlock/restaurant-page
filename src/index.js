"use strict";

import createHome from "./home";

const content = document.querySelector("#content");
const allTabs = document.querySelectorAll(".tab");
allTabs.forEach((tab) => {
  console.log(tab.dataset.tab);
});

createHome();

/* 
image, title, description

every tabbed page code should be in different module
export the function -->  import it to index.js

tab switching logic ---> index.js
event listener for each button. 
wipe before new one is loaded


create elements using only javscript
apend each one to #content

*/
