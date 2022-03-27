var navbar = document.querySelector('.navbar');
var frontMain = document.querySelector('.frontmain');
var main = document.querySelector('.main');
var upBtn = document.querySelector('.goUpBtn');
var forall = document.querySelector('*');
var announcement = document.querySelector('.announcement-signal')
var isNavbarScroll = false;
var hasReached = false;

setTimeout(() => {
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
        }, 1000);
    }
    if (this.scrollY == 0)
        upBtn.classList.add('hidden');
    else
        upBtn.classList.remove('hidden');
}, 1000);

var colorChange=false;

setInterval(() => {
    console.log(colorChange);
    if (colorChange)
        announcement.style.color = 'red', colorChange = false;
    else
        announcement.style.color = 'rgb(158, 0, 0)', colorChange = true;

}, 300);
