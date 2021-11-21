const registerForm = document.querySelector("#registerForm");
const emailBox = document.querySelector("#email");
const passwdBox = document.querySelector("#password");
const confirmPasswdBox = document.querySelector("#confirmPassword");
const errorBox = document.querySelector("#registerForm p");

const EMAIL_REGEX = /^[^s@]+@[^s@]+.[^s@]+$/;

const formResponse = {
  MISSING_EMAIL: "Please enter an email address",
  INVALID_EMAIL: "Please enter a valid email address",
  MISSING_PASSWD: "Please enter a password",
  MISSING_CONFIRM: "Please enter password confirmation",
  MISS_MATCH_PASSWD: "Passwords you've entered do not match",
  SUCCESS: "Submit was successful",
};

function checkErrorMessage() {
  if (!emailBox.value) return formResponse.MISSING_EMAIL;
  if (!emailBox.match(EMAIL_REGEX)) return formResponse.INVALID_EMAIL;
  if (!passwdBox.value) return formResponse.MISSING_PASSWD;
  if (!confirmPasswdBox.value) return formResponse.MISSING_CONFIRM;
  if (passwdBox.value !== confirmPasswdBox.value) return formResponse.MISS_MATCH_PASSWD;
  return formResponse.SUCCESS;
}

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let error = checkErrorMessage();
  if (error != formResponse.SUCCESS) errorBox.innerText = error;
});
