var navbar = document.querySelector('.navbar');
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