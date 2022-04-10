

var slideIndex=0;
showSlides(slideIndex);

function plus(n){
    showSlides(slideIndex+=n);
}

function showSlides(n){
    var card=document.getElementsByClassName("test-card");
    if(n<0){
        slideIndex=card.length+n;
    }
    if(n>=card.length){
        slideIndex=0;
    }
    for(var i=0;i<card.length;i++){
        card[i].style.display="none";
        console.log(i);
    }
    card[(slideIndex)%(card.length)].style.display="block";
    card[(slideIndex+2)%(card.length)].style.display="block";
    card[(slideIndex+1)%(card.length)].style.display="block";
}