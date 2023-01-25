const input = document.querySelector("#validation-input");
const valueOfLenght = input.getAttribute("data-length");

input.addEventListener("blur", handleCheckInput);

function handleCheckInput(e) {
  e.preventDefault();

  if (Number(valueOfLenght) !== e.target.value.length) {
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }
    return input.classList.add("invalid");
  }

  input.classList.remove("invalid");
  input.classList.add("valid");
}
