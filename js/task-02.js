"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemList = ingredients.map((ingridient) => {
  const item = document.createElement("li");

  item.innerText = ingridient;
  item.classList.add("item");
  return item;
});

const ul = document.querySelector("ul");

ul.append(...itemList);
