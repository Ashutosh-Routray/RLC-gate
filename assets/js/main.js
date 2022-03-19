var navbar = document.querySelector('.navbar');
var upBtn = document.querySelector('.goUpBtn');

window.addEventListener("scroll", (event) => {
    if (this.scrollY == 0)
        upBtn.classList.add('hidden');
    else
        upBtn.classList.remove('hidden');
});

upBtn.addEventListener('click', (event) => {
    window.scrollTo(0, 0);
});

window.onbeforeunload = function () {
    window.location.reload(true);
};