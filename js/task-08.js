const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Fill all fields, right now!!!");
  }

  const account = {
    email: email.value,
    password: password.value,
  };
  console.log(account);
  e.currentTarget.reset();
}
