const nameLogin = document.getElementById("nameLogin")
const passwordLogin = document.getElementById("passwordLogin")

const nameSignup = document.getElementById("nameSignup")
const lastNameSignup = document.getElementById("lastNameSignup")
const userNameSignup = document.getElementById("userNameSignup")
const genderSignup = document.getElementById("genderSignup")
const emailSignup = document.getElementById("emailSignup")
const passwordSignup = document.getElementById("passwordSignup")
const passwordConfirmation = document.getElementById("passwordConfirmation")
const messagePassword = document.getElementById("messagePassword")

const formLogin = document.getElementById("formLogin")
const formSignup = document.getElementById("formSignup")

const btnRegistro = document.getElementById("btnRegistro")
const btnIngreso = document.getElementById("btnIngreso")




formLogin.addEventListener("submit", function (event) {
  event.preventDefault()

  const saveUser = localStorage.getItem('userName')
  const savePassword = localStorage.getItem('password')

  if (saveUser !== null) {
    if ((saveUser === nameLogin.value) && (savePassword === passwordLogin.value)) {
      window.location.href = "../../index.html"
    } else {
      alert('El nombre o la contraseña no coincide')
    }
  } else {
    alert('El usuario no está registrado, por favor registrese primero')
  }

})

formSignup.addEventListener("submit", function (event) {
  event.preventDefault()

  localStorage.setItem("name", nameSignup.value)
  localStorage.setItem("lastName", lastNameSignup.value)
  localStorage.setItem("userName", userNameSignup.value)
  localStorage.setItem("gender", genderSignup.value)
  localStorage.setItem("email", emailSignup.value)
  localStorage.setItem("password", passwordSignup.value)
  localStorage.setItem("passwordConfirmation", passwordConfirmation.value)


  if (passwordSignup.value === passwordConfirmation.value) {
    localStorage.setItem("accountNumber", accountNumberGenerator(12));
    saveData()
    window.location.href = "./registro.html"
  } else {
    messagePassword.innerHTML = "Las contraseñas no coinciden"
  }
})
const accountNumberGenerator = (longitud) => {
  let accountNumber = "";
  const numbers = "0123456789";
  for (let i = 0; i < longitud; i++) {
    accountNumber += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return accountNumber;
};
function preventNonNumericalInput(e) {
  e = e || window.Event
  var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
  var charStr = String.fromCharCode(charCode);

  if (!charStr.match(/^[0-9]+$/))
    e.preventDefault();
}

// Obtener el formulario
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});