const formEmail = document.querySelector("#form-email");
const emailInput = document.querySelector("#email");
const mainForm = document.querySelector(".main-form");
const succsessMessages = document.querySelector(".success-message");
const invalidMessage = document.querySelector(".invalid-message");
const DismissMessageBtn = document.querySelector("#btn-dismiss");

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  return regex.test(email);
}

formEmail.addEventListener("submit", (e) => {
  e.preventDefault();

  const invalidMessageColor = "hsl(4,100%,67%)";

  if (validateEmail(emailInput.value)) {
    mainForm.classList.replace("flex", "hidden");
    succsessMessages.classList.replace("hidden", "flex");
    e.target.reset();
  } else {
    emailInput.style.borderColor = invalidMessageColor;
    emailInput.style.color = invalidMessageColor;
    invalidMessage.style.display = "inline";
  }
});

DismissMessageBtn.addEventListener("click", () => {
  succsessMessages.classList.replace("flex", "hidden");
  mainForm.classList.replace("hidden", "flex");
});
