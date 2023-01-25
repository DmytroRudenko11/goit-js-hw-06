function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.body;

btn.addEventListener("click", handleColorChange);

function handleColorChange() {
  const randomColor = getRandomHexColor();

  color.innerHTML = randomColor;
  body.style.backgroundColor = color.innerHTML;
}
