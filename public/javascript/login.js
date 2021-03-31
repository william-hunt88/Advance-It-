const register = document.querySelector(".signup-form");
const login = document.querySelector(".login-form");
const revealRegisterForm = document.querySelector("#registerFormBtn")

async function loginFormHandler(event) {
  console.log("login-formhandler")
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  console.log(email, password);

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/homepage");
    } else {
      alert(response.statusText);
    }
  }
}

async function signUpFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const bandName = document.querySelector("#band_name-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && bandName && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username: username,
        email: email,
        band_name: bandName,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    })
      console.log(response);


    if (response.ok) {
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".register-btn").addEventListener("click", function () {
  console.log("here");
  register.style.display = "block";
  login.style.display = "none";
  revealRegisterForm.setAttribute("style", "display: none");
});

document.querySelector("#loginFormBtn").addEventListener("click", function () {
  register.style.display = "none";
  login.style.display = "block";
  revealRegisterForm.setAttribute("style", "display: block");
})

document
  .querySelector(".signup-form")
  .addEventListener("submit", signUpFormHandler);

  document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
