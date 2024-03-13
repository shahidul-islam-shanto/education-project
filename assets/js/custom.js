const navBer = document.querySelector('.navber');
const menuBtn = document.getElementById('menu-btn');
const closeNav = document.getElementById('close-navber')

menuBtn.addEventListener('click', function(){
    navBer.classList.add('active');
})

closeNav.addEventListener('click', function(){
    navBer.classList.remove('active');
})

// login and register 
const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');

registerBtn.addEventListener('click', function(){
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');

    loginForm.classList.remove('active');
   registerForm.classList.add('active');
})
loginBtn.addEventListener('click', function(){
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');

  loginForm.classList.add('active');
  registerForm.classList.remove('active');
})

// account registration
const accountForm = document.querySelector('.account-form');
 const accountBtn = document.getElementById('account-btn');
 const closeForm = document.getElementById('close-form')

accountBtn.addEventListener('click', function(){
    accountForm.classList.add('active');
})

closeForm.addEventListener('click', function(){
    accountForm.classList.remove('active');
})
