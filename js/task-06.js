const input = document.querySelector("#validation-input");
const valueOfLenght = input.getAttribute("data-length");

input.addEventListener("blur", handleCheckInput);

function handleCheckInput(e) {
  e.preventDefault();

  if (Number(valueOfLenght) !== e.target.value.length) {
    return input.classList.add("invalid");
  }

  input.classList.replace("invalid", "valid");
}
