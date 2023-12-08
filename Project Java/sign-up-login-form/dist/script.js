// Validating Username
var username = document.getElementById("username")
var err = document.getElementById("error")
username.onfocus = function()
{
    username.style.border="solid 2px red"
    username.style.transition = "transform 0.5s ease-in-out";
    username.style.transform = "scale(1.1)";
    if(username.value.length == "")
    {
        var err = document.getElementById("error")
        err.innerText = "Name Should Not Be Empty"
    }
}
username.onblur = function()
{
    username.style.border="1px solid blue";
}
username.onkeyup  = function()
{
    if(username.value.length < 3 || isFinite(username.value))
    {
        
        err.innerText = "Invalid Name"
        err.style.display = "block";
        username.style.border="2px red solid";
        username.style.transition = "transform 0.5s ease-in-out";
        username.style.transform = "scale(1.1)";
    }
    else
    {
        username.style.border="2px green solid";
        err.innerHTML = "";
        username.style.transition = "transform 0.5s ease-in-out";
        username.style.transform = "scale(1)";
    }
    if(username.value.length == "")
    {
        err.innerText = "Name Should Not Be Empty"
        username.style.border="2px red solid";
        username.style.transition = "transform 0.5s ease-in-out";
        username.style.transform = "scale(1.1)";
    }
}

// /////////////////////////////////////////////////////////////////////////////////
// Validating Email
var email = document.getElementById("email");
var email_error = document.getElementById("erroremail")
email.onfocus = function()
{
    email.style.border="solid 2px red"
    if(email.value.length == "")
    {
        email_error.innerText = "email Should Not Be Empty"
    }
}
email.onblur = function()
{
    email.style.border="1px solid blue";
    email.style.transition = "transform 0.5s ease-in-out";
    email.style.transform = "scale(1)";
}
email.onkeyup  = function()
{
    if(email.value.indexOf('@') ==-1)
    { 
        email_error.innerText = "email should contain '@' symbol";
        err.style.display = "block";
        email.style.border="2px red solid";
        email.style.transition = "transform 0.5s ease-in-out";
        email.style.transform = "scale(1.1)";
    }
    else
    {
        email.style.border="2px green solid";
        email_error.innerHTML = "";
        email.style.transition = "transform 0.5s ease-in-out";
        email.style.transform = "scale(1)";
    }
    if(email.value.length == "")
    {
        email_error.innerText = "email Should Not Be Empty"
        email.style.border="2px red solid";
        email.style.transition = "transform 0.5s ease-in-out";
        email.style.transform = "scale(1.1)";
    }
}
// ////////////////////////////////////////////////////////////////////////////////////
// Validating Password
var passwordInput = document.getElementById("password");
var repeatPasswordInput = document.getElementById("Re-password");
var error = document.getElementById("Re-errorPass");
// var re_error = document.getElementById("Re-errorPass"); 

repeatPasswordInput.addEventListener("keyup", () => {
    if (passwordInput.value !== repeatPasswordInput.value) {
        error.innerText = "password and Re-password should be the same";
        passwordInput.style.transition = "transform 0.5s ease-in-out";
        passwordInput.style.transform = "scale(1.1)";
        passwordInput.style.border="2px solid red";
        repeatPasswordInput.style.transition = "transform 0.5s ease-in-out";
        repeatPasswordInput.style.transform = "scale(1.1)";
        repeatPasswordInput.style.border="2px solid red";
    } else {
        if( passwordInput !='' && repeatPasswordInput != '')
        {

            error.innerText = "";
            passwordInput.style.transition = "transform 0.5s ease-in-out";
            passwordInput.style.transform = "scale(1)";
            repeatPasswordInput.style.transition = "transform 0.5s ease-in-out";
            repeatPasswordInput.style.transform = "scale(1)";
            
            passwordInput.style.border = "3px green solid"
            repeatPasswordInput.style.border = "3px green solid"
        }
        if(passwordInput.value.length == "")
    {
        error.innerText = "Password Should Not Be Empty"
        passwordInput.style.transition = "transform 0.5s ease-in-out";
        passwordInput.style.transform = "scale(1.1)";
        passwordInput.style.border="2px red solid";
        repeatPasswordInput.style.transition = "transform 0.5s ease-in-out";
        repeatPasswordInput.style.transform = "scale(1.1)";
        repeatPasswordInput.style.border="2px red solid";
    }
    }
    
});
passwordInput.onfocus = function()
{
    passwordInput.style.transition = "transform 0.5s ease-in-out";
    passwordInput.style.transform = "scale(1.1)";
    passwordInput.style.border="solid 2px red"

    if(passwordInput.value.length == "")
    {
        error.innerText = "Password Should Not Be Empty"
        passwordInput.style.transition = "transform 0.5s ease-in-out";
        passwordInput.style.transform = "scale(1.1)";
        passwordInput.style.border="2px red solid";
        repeatPasswordInput.style.transition = "transform 0.5s ease-in-out";
        repeatPasswordInput.style.transform = "scale(1.1)";
        repeatPasswordInput.style.border="2px red solid";
    }
    
}
passwordInput.onblur = function()
{
    passwordInput.style.transition = "transform 0.5s ease-in-out";
    passwordInput.style.transform = "scale(1)";
    repeatPasswordInput.style.transition = "transform 0.5s ease-in-out";
    repeatPasswordInput.style.transform = "scale(1)";
    passwordInput.style.border="2px solid red";
    repeatPasswordInput.style.border="2px solid red";
}

repeatPasswordInput.onblur = function()
{
    if(passwordInput.value == repeatPasswordInput.value)
    {
        passwordInput.style.transition = "transform 0.5s ease-in-out";
        passwordInput.style.transform = "scale(1)";
        repeatPasswordInput.style.transition = "transform 0.5s ease-in-out";
        repeatPasswordInput.style.transform = "scale(1)";
        passwordInput.style.border="1px solid blue";
        repeatPasswordInput.style.border="1px solid blue";
    }
    else
    {
        passwordInput.style.transition = "transform 0.5s ease-in-out";
        passwordInput.style.transform = "scale(1.1)";
        repeatPasswordInput.style.transition = "transform 0.5s ease-in-out";
        repeatPasswordInput.style.transform = "scale(1.1)";
        passwordInput.style.border="2px solid red";
        repeatPasswordInput.style.border="2px solid red";
    }
}
function sign()
{
    if(username.value.length >= 3 || isNaN(username.value) || username.value.length != "")
    {
        localStorage.setItem("username",username.value)
    }
    if(email.value.indexOf('@') !=-1)
    {
        localStorage.setItem("email",email.value)
    }
    if(passwordInput.value == repeatPasswordInput.value)
    {
        localStorage.setItem("passwordInput",passwordInput.value)
  
    }
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// Login Validation
var email_local = localStorage.getItem("email")
console.log(email_local);
var pass_local = localStorage.getItem("passwordInput")
console.log(pass_local);

var emailinput = document.getElementById("EMAIL");
var passinput = document.getElementById("PASS");


var login_error = document.getElementById("loginerror");
var log = document.getElementById('log');
function login()
{
    log.addEventListener('click', function(event) {
    if(emailinput.value === email_local && passinput.value === pass_local)
    {
        login_error.innerText = "";
        emailinput.style.border = "1px solid blue";
        passinput.style.border = "1px solid blue";
        window.open("../../../index.html","","");
    }
    else
    {
        event.preventDefault();
        login_error.innerText = "Email Or Password Doesn't Exist";
        emailinput.style.border = "2px solid red";
        passinput.style.border = "2px solid red";
    }
});
}
