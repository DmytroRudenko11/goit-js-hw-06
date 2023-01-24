"use strict";

const categories = document.querySelectorAll(".item");
const result1 = `Number of categories: ${categories.length}`;
console.log(result1);

categories.forEach((elem) => {
  console.log(`Category: ${elem.querySelector("h2").textContent}`);
  console.log(`Elements: ${elem.querySelectorAll("li").length}`);
});
