const register = document.querySelector(".signup-form");
const login = document.querySelector(".login-form")


document.querySelector(".register-btn").addEventListener("click", function () {
    console.log("here")
    register.style.display = "block";
    login.style.display = "none";
})