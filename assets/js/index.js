var navbar = document.querySelector('.navbar');
var frontMain = document.querySelector('.frontmain');
var main = document.querySelector('.main');
// var upBtn = document.querySelector('.goUpBtn');
var forall = document.querySelector('*');
var isNavbarScroll = false;
var hasReached = false;

window.addEventListener("scroll", (event) => {
    if (!isNavbarScroll) {
        navbar.classList.remove('hidden');
        window.scrollTo(0, frontMain.clientHeight - navbar.clientHeight);
        isNavbarScroll = true;
        forall.style.scrollBehavior='auto';
        setTimeout(() => {
            frontMain.classList.add('hidden');
            window.scrollTo(0, 0);
            main.style.marginTop = '5rem';
            // navbar.classList.add('hidden');
            forall.style.scrollBehavior='smooth';
        }, 750);
    }
    // if (this.scrollY == 0)
    //     upBtn.classList.add('hidden');
    // else
    //     upBtn.classList.remove('hidden');
});

setInterval(() => {
    console.log(colorChange);
    if (colorChange)
        announcement.style.color = 'red', colorChange = false;
    else
        announcement.style.color = 'rgb(158, 0, 0)', colorChange = true;

}, 300);

// upBtn.addEventListener('click', (event) => {
//     window.scrollTo(0, 0);
// });

window.onbeforeunload = function () {
    window.location.reload(true);
};