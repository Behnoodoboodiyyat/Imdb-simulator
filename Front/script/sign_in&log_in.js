'use strict';



function setFormMessage(formElement , type , message){
  const messageElement = formElement.querySelector(".form-message");

  messageElement.textContent = message;
  messageElement.classList.remove("form-message-success" , "form-message-error");
  messageElement.classList.add(`form-message-${type}`);
}


function setInoutError(inputElement , message){

  inputElement.classList.add("form-input-error");
  inputElement.parentElement.querySelector(".form-input-error-message").textContent = message;


}

// setFormMessage(loginForm , "success" , "You're logged in!");


document.addEventListener("DOMContentLoaded" , ()=>{
    const loginForm = document.querySelector('#login');
    const createAccountForm = document.querySelector('#createAccount');


    document.querySelector('#linkCreateAccount').addEventListener("click", e=>{
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    })

    document.querySelector('#linkLogin').addEventListener("click", e=>{
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    })

    loginForm.addEventListener("submit" , e=>{
      e.preventDefault();

      setFormMessage(loginForm , "error" , "Invalid username/password combination" );
    }); 



    document.querySelectorAll(".form-input").forEach(inputElement =>{
      inputElement.addEventListener("blur" , e =>{
          if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10){
            setInputError(inputElement , "Username must be at least 10 charachters in length");
          }
      });
    });
});


const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar-container,.sidebar,.left-menu-icon,.toggle");

ball.addEventListener("click",()=>{
  items.forEach(item=>{
    item.classList.toggle("active")
  })
  ball.classList.toggle("active")
})