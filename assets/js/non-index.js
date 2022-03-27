var navbar = document.querySelector('.navbar');
var frontMain = document.querySelector('.frontmain');
var main = document.querySelector('.main');
var upBtn = document.querySelector('.goUpBtn');
var forall = document.querySelector('*');
var isNavbarScroll = false;
var hasReached = false;
var announcement = document.querySelector('.announcement-signal')

// main.style.marginTop = '5rem';

var colorChange=false;

setInterval(() => {
    console.log(colorChange);
    if (colorChange)
        announcement.style.color = 'red', colorChange = false;
    else
        announcement.style.color = 'rgb(158, 0, 0)', colorChange = true;

}, 300);

