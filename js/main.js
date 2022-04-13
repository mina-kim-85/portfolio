//Work section -Modal
const workModals = document.querySelectorAll(".work__modal");
const learnmoreBtns = document.querySelectorAll(".learn__btn");
const modalCloseBtns = document.querySelectorAll(".modal__close-btn");

var modal = function (modalClick) {
    workModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtns, i) => {
    learnmoreBtns.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtns) => {
    modalCloseBtns.addEventListener("click", () => {
        workModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//Toggle
// const navToggle = document.querySelector('.nav-toggle');
// const navLinks = document.querySelectorAll('.nav__link');

// navToggle.addEventListener('click', () => {
//     document.body.classList.toggle('nav-open');
// });

// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         document.body.classList.remove('nav-open');
//     });
// });

//Navigation bar effects on scroll

// window.addEventListener("scroll", function(){
//     const header = document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 0);
// });

// let navMenu = document.getElementById("js-menu");
// let navBarToggle = document.getElementById("js-navbar-toggle");

// navBarToggle.addEventListener("click", function () {
//     mainNav.classList.toggle("active");
// });

// navMenu.forEach(link => {
//     link.addEventListener('click', () => {
//         document.body.classList.remove('active');
//     });
// });

//Toggle

// const header = document.getElementById('header');
// const toggle = document.getElementById('toggle');
// const navbar = document.getElementById('navbar');

// document.onclick = function (e) {
//     if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
//         toggle.classList.remove('active');
//         navbar.classList.remove('active');
//     }
// }

// toggle.onclick = function () {
//     toggle.classList.toggle('active');
//     navbar.classList.toggle('active');
// }

const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
});