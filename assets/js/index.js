var navbar = document.querySelector('.navbar');
var searchBar = document.querySelector('.header-button');
var headerLinks = document.querySelector('.header-links');
var headerSearchButton = document.querySelector('.header-button');
var headerSearchButtonLong = document.querySelector('.header-button-long');
var mainDiv = document.querySelector('.main');
// var frontMain = document.querySelector('.frontmain');
var isNavbarScroll = false;
var isSearchOpen = false;

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (!isNavbarScroll)
        window.scrollTo(0, (window.innerHeight) / 1.15), isNavbarScroll = true;
    // if (isNavbarScroll && scroll <= window.innerHeight) {
    //     isNavbarScroll = false;
    //     window.scrollTo(0, 0);
    //     navbar.classList.add('hidden');
    // }
    if (scrollY == 0)
        isNavbarScroll = false;
    if (scroll >= window.innerHeight / 2)
        navbar.classList.remove('hidden');
    else {
        navbar.classList.add('hidden');
    }
});

mainDiv.addEventListener("click", (event) => {
    if (isSearchOpen) {
        headerLinks.style.paddingLeft = '15rem';
        isSearchOpen = false;
        headerSearchButtonLong.classList.add('hidden');
        headerSearchButton.classList.remove('hidden');
    }
});

searchBar.addEventListener("click", (event) => {
    if (!isSearchOpen) {
        headerLinks.style.paddingLeft = '1rem';
        isSearchOpen = true;
        headerSearchButtonLong.classList.remove('hidden');
        headerSearchButton.classList.add('hidden');
        headerSearchButtonLong.style.marginLeft = '12rem'
    }
});