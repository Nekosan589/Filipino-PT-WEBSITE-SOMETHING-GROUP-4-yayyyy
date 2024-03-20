const loginBtn = document.getElementById("login-btn");
const loginForm = document.getElementById("login-form")
const backButton = document.getElementById("back-btn")

loginBtn.onclick = () =>{
    if(loginForm.classList.contains("hide")){
        loginForm.classList.remove("hide");
        loginForm.classList.add("show");
    } else if(loginForm.classList.contains("show")){
        loginForm.classList.remove("show");
        loginForm.classList.add("hide")
        }
    }

backButton.onclick = () => {
    if(loginForm.classList.contains("hide")){
        loginForm.classList.remove("hide");
        loginForm.classList.add("show");
    } else if(loginForm.classList.contains("show")){
        loginForm.classList.remove("show");
        loginForm.classList.add("hide")
        }
    }