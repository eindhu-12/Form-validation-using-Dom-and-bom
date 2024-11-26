
const openFormButton = document.getElementById('open-form');
const signupForm = document.getElementById("innerSignup");
openFormButton.addEventListener('click', () => {
    signupForm.style.display = 'block'; // Show the form
});
if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault()
        let nameExp = /^[a-zA-Z]{2,}$/;
        let emailExp = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]{2,}$/;
        let pswdExp = /^(?=(.*[a-z]{2,}))(?=(.*[A-Z]{2,}))(?=(.*[0-9]{1,}))(?=(.*[!@#$%^&*_-]{1,}))[a-zA-Z0-9!@#$%^&*()_-]{8,}$/;

        let name = document.getElementById("names").value.trim()
        let mail = document.getElementById("mails").value.trim()
        let pswd = document.getElementById("pswds").value.trim()
        document.getElementById("nameerr").textContent = ""
        document.getElementById("mailerr").textContent = ""
        document.getElementById("pswderr").textContent = ""
        let signUp = true;

        if (!nameExp.test(name)) {
            document.getElementById("nameerr").textContent = "Please Enter atleast 2 characters";
            signUp = false;
        }
        if (!emailExp.test(mail)) {
            document.getElementById("mailerr").textContent = "Please Enter correct way";
            signUp = false;
        }
        if (!pswdExp.test(pswd)) {
            document.getElementById("pswderr").textContent = "Enter a Strong password with minimum 8 Characters";
            signUp = false;
        }
        if (pswd.length > 15) {
            document.getElementById("pswderr").textContent = "Password Should be Maximum 15 Characters ";
            signUp = false;
        }
        if (signUp) {
            localStorage.setItem("mailVerify", mail);
            localStorage.setItem("pswdVerify", pswd)
            alert("signUp Done")
            document.body.querySelector("form").style.display = "none"
            setTimeout(() => {
                window.location.href = "login.html"
            }, 2000)
        }
    });
}
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault()
        let lmail = localStorage.getItem("mailVerify");
        let lpswd = localStorage.getItem("pswdVerify");
        let loginMail = document.getElementById("logmail").value.trim();
        let loginpswd = document.getElementById("logpswd").value.trim();
        if (loginMail === lmail && loginpswd === lpswd) {
            alert("sucessful logged");
        }
        else {
            alert("Invalid Credientials");
        }
    });
}