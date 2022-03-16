var navbar = document.querySelector('.navbar');
var frontMain = document.querySelector('.frontmain');
var isNavbarScroll = false;

// window.addEventListener("scroll", (event) => {
//     if (!isNavbarScroll) {
//         navbar.classList.remove('hidden');
//         window.scrollTo(0, frontMain.clientHeight - navbar.clientHeight);
//         isNavbarScroll = true;
//     }
//     if (this.scrollY == 0)
//         navbar.classList.add('hidden'), isNavbarScroll = false;
// });

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
            isNavbarScroll = true;
        }
        else if (scrollY < frontMain.clientHeight - navbar.clientHeight && isNavbarScroll) {
            navbar.classList.add('hidden');
            window.scrollTo(0, 0);
            isNavbarScroll = false;
        }
    }
}, 500);