var navbar = document.querySelector('.navbar');
var frontMain = document.querySelector('.frontmain');
var upBtn = document.querySelector('.goUpBtn');
var isNavbarScroll = false;
var hasReached = false;

window.addEventListener("scroll", (event) => {
    if (!isNavbarScroll) {
        navbar.classList.remove('hidden');
        window.scrollTo(0, frontMain.clientHeight - navbar.clientHeight);
        isNavbarScroll = true;
    }
    if (this.scrollY == frontMain.clientHeight - navbar.clientHeight)
        hasReached = true;
    if (this.scrollY == 0)
        navbar.classList.add('hidden'), isNavbarScroll = false;

    if (this.scrollY <= frontMain.clientHeight - navbar.clientHeight - 1 &&
        isNavbarScroll && hasReached) {
        window.scrollTo(0, frontMain.clientHeight - navbar.clientHeight);
    }
    if (this.scrollY <= frontMain.clientHeight - navbar.clientHeight - 1)
        upBtn.classList.add('hidden');
    else
        upBtn.classList.remove('hidden');
});

upBtn.addEventListener('click', (event) => {
    window.scrollTo(0, frontMain.clientHeight - navbar.clientHeight);
});

window.onbeforeunload = function () {
    window.location.reload(true);
};