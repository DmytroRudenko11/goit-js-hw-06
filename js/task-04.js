let counterValue = 0;
const decButton = document.querySelector('button[data-action="decrement"]');
const inButton = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");
decButton.addEventListener("click", function () {
  counterValue -= 1;
  counter.textContent = counterValue;
});
inButton.addEventListener("click", function () {
  counterValue += 1;
  counter.textContent = counterValue;
});
