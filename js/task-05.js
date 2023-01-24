const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handleInputTyping);

function handleInputTyping(e) {
  e.preventDefault();

  if (e.target.value === "") {
    return (output.textContent = "Anonymous");
  }

  output.textContent = e.target.value;
}
