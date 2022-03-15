var navbar = document.querySelector('.navbar');
var searchBar = document.querySelector('.header-button');
var headerLinks = document.querySelector('.header-links');
var headerSearchButton = document.querySelector('.header-button');
var headerSearchButtonLong = document.querySelector('.header-button-long');
var mainDiv = document.querySelector('.main');
var frontMain = document.querySelector('.frontmain');
var isNavbarScroll = false;

window.addEventListener("scroll", (event) => {
    if (!isNavbarScroll) {
        navbar.classList.remove('hidden');
        window.scrollTo(0, frontMain.clientHeight - navbar.clientHeight);
        isNavbarScroll = true;
    }
    if (this.scrollY == 0)
        navbar.classList.add('hidden'), isNavbarScroll = false;

});