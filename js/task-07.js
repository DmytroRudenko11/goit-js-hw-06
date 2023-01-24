const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", changeFont);

function changeFont(e) {
  text.style.fontSize = `${e.target.value}px `;
}

console.log(input.attributes);
