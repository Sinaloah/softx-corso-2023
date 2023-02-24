/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function myButton(){
    alert("This page is currently under maintenance");
  }


let nameInput = document.body.querySelector('#name');
let mailInput = document.body.querySelector('#email');
let phoneInput = document.body.querySelector('#phone');
let messageInput = document.body.querySelector('#name');
let formButton = document.body.querySelector('#submitBtn');
let errorMessage = document.body.querySelector('#submitErrorMessage');
let successMessage = document.body.querySelector('#submitSuccessMessage');

String.prototype.isNumber = function(){return /^\d+$/.test(this);}

function nameValue(){
    if(String(nameInput.value).length < 5){
        alert("your name should be made of at least 5 characters");
        errorMessage.classList.remove('d-none')
        successMessage.classList.add('d-none')
    } else if(String(phoneInput.value).isNumber() == false){
        alert("The telephone number must be made of only numbers");
        errorMessage.classList.remove('d-none')
        successMessage.classList.add('d-none')
    } else {
        successMessage.classList.remove('d-none')
        errorMessage.classList.add('d-none')
    }
  }

formButton.addEventListener('click', (e) => {
    e.preventDefault()
    nameValue()
});




