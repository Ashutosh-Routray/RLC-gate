var navbar = document.querySelector('.navbar');
var frontMain = document.querySelector('.welcome-to-rlc');
var main = document.querySelector('.main');
var upBtn = document.querySelector('.goUpBtn');
var forall = document.querySelector('*');
var announcement = document.querySelector('.announcement-signal')
var isNavbarScroll = false;
var hasReached = false;

setTimeout(()=>{
        setTimeout(() => {
                forall.style.scrollBehaviour='smooth';
                window.scrollTo(0, window.innerHeight);  
        }, 1000);
        setTimeout(() => {
                frontMain.classList.add('hidden');    
                navbar.classList.remove('hidden');  
        }, 1550);      
        
},1000);



setTimeout(()=>{
        window.scrollTo(0,0);
},1);