document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-form-submit");
    const loginErrorMsg = document.getElementById("login-error-msg");
    console.log(loginForm)
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const password = loginForm.password.value;
    
        if (password === "walrus") {
            alert("Trouvé !");
            window.location.href = "w.html";
        } else {
            loginErrorMsg.style.opacity = 1;
        }
    })
    
})