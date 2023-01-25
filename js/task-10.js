function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const deleteBtn = document.querySelector("[data-destroy]");
const renderDiv = document.querySelector("#boxes");

createBtn.addEventListener("click", createButtonHandler);
deleteBtn.addEventListener("click", deleteBoxes);

function createButtonHandler() {
  renderDiv.innerHTML = "";
  createBoxes(input.value);
}

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");

    const color = getRandomHexColor();
    box.style.backgroundColor = color;

    let size = 30 + i * 10;
    box.style.height = size + "px";
    box.style.width = size + "px";

    boxes.push(box);
  }
  renderDiv.append(...boxes);
}

function deleteBoxes() {
  renderDiv.innerHTML = "";
}
