// Скрол

var linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.2;
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].onclick = function() {
    var w = window.pageYOffset, hash = this.href.replace(/[^#]*(.*)/, "$1");  
    (t = document.querySelector(hash).getBoundingClientRect().top), 
      (start = null);
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
        r = t < 0
          ? Math.max(w - progress / V, w + t)
          : Math.min(w + progress / V, w + t);
      window.scrollTo(0, r);
      if (r != w + t) {
        requestAnimationFrame(step);
      } else {
        location.hash = hash;
      }
    }
    return false;
  };
}


// Валидатор 

function validateform(form) {
if (form.elements["name"].value == "") {
    alert("Please, enter your full name.");
    return false;
}
if (form.elements["name"].value.length < 2) {
    alert("Please, enter your full name.");
    return false;
}
let phone_reg = new RegExp('[A-z А-я]', 'g');
let literInPhone = phone_reg.test(form.elements["phone"].value);
// if (form.elements["phone"].value == "") {
//     alert("Please enter your phone number without spaces.");
//     return false;
// }
if (literInPhone) {
    alert("Please, enter your phone number.");
    return false;
}

if (form.elements["phone"].value.length < 11) {
    alert("Please, enter your phone number.");
    return false;
}

form.submit();
}

// Кнопка скролл страницы в верх  

let upButton = document.querySelector('.up-button');

window.onscroll = function () {
if (window.pageYOffset > 1700) {
    upButton.classList.add('shown');
} else {
    upButton.classList.remove('shown');
};
};

upButton.onclick = function () {
window.scrollTo(0, 0);
};


// Вызов попап формы

let orderBtn = document.querySelectorAll(".order-btn");
let popupForm = document.querySelector(".popup-form");
let formClose = document.querySelector(".block-form-close");


for (let i = 0; i < orderBtn.length; i++) {
orderBtn[i].onclick = function(){
    popupForm.classList.remove("hidden");
}
}

formClose.onclick = function(){
popupForm.classList.add('hidden');
}


// Меню бургера

let iconBurger = document.querySelector(".toggle-menu");
let iconClose = document.querySelector(".container-nav-menu-close");
let navMenu = document.querySelector(".background-nav-menu");
let menuList = document.querySelectorAll(".menu-list");

iconBurger.addEventListener("click", function(){
navMenu.classList.remove("nav-menu-container-hidden");
});

iconClose.addEventListener("click", function(){
navMenu.classList.add("nav-menu-container-hidden");
});


for (let navMenuList of menuList){
navMenuList.onclick = function(){
    navMenu.classList.add("nav-menu-container-hidden");
}
}