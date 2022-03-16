var navbar = document.querySelector('.navbar');
var frontMain = document.querySelector('.frontmain');
var isNavbarScroll = false;
let scrolling = false;

window.onscroll = () => {
    scrolling = true;
};

setInterval(() => {
    if (scrolling) {
        scrolling = false;
        if (scrollY > 0 && !isNavbarScroll) {
            navbar.classList.remove('hidden');
            window.scrollTo(0, frontMain.clientHeight - navbar.clientHeight);
            // frontMain.innerHTML = "";
            isNavbarScroll = true;
        }
        else if (scrollY < frontMain.clientHeight - navbar.clientHeight - 10 && isNavbarScroll) {
            // frontMain.classList.add('hidden');
            window.scrollTo(0, 0);
            isNavbarScroll = false;
        }
    }
}, 500);