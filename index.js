'use strict'

const currency = document.querySelector('#currency');
const burgerMenu = document.querySelector('.menu');
const menu = document.querySelector('.header__links');
const images = document.querySelectorAll('.img');
const mensLink = document.querySelector('.men');
const womenLink = document.querySelector('.women');
const header = document.querySelector('.header');

const currencies = ["GB", "EUR", "CZK"];

currencies.forEach((curr) => {
    currency.innerHTML += `<option value=${curr}>${curr}</option>`
});

// BURGER MENU 

burgerMenu.addEventListener('click', () => {
    menu.classList.add('nav-active');
})

const linkActive = () => {
    menu.classList.remove('nav-active')
}

const navLink = document.querySelectorAll('.offer__link');

navLink.forEach(n => n.addEventListener('click', linkActive));

// MOUSE ON PICTURE

/*
images.forEach(image => image.addEventListener('mouseover', () => {
    
}))
*/

// BACKGROUND TOGGLE

const clearPicture = () => {
    header.classList.remove('menPicture');
    header.classList.remove('womenPicture');
}

mensLink.addEventListener('click', () => {
    clearPicture();
    header.classList.add('menPicture');
    mensLink.classList.add('activeLink');

/*
    const offer = document.createElement('div');
    offer.classList.add('offer-onclick');
    offer.innerHTML = ` <div class="offer-right">
    <h5>Casual</h5>
    <li>Jackets</li>
    <li>Hoodies Sweatshirts</li>
    <li>Polo Shirts</li>
    <li>Sportswear</li>
    <li>Trousers</li>
    <li>T-Shirts</li>
</div>
<div class="offer-left">
    <h5>Formal</h5>
    <li>Jackets</li>
    <li>Shirts</li>
    <li>Suits</li>
    <li>Trousers</li>
</div> `

    mensLink.appendChild(offer);
*/
});

womenLink.addEventListener('click', () => {
    clearPicture();
    header.classList.add('womenPicture');
    womenLink.classList.add('activeLink');
})


    