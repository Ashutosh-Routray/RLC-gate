let slideIndex = 0;
let slides = document.getElementsByClassName("slides");
var info;

function plusSlides(n) {
    slideIndex += n;
    drawSlides(slideIndex, info);
}
//../json/testimonial.json
fetch("./assets/json/testimonial.json")
    .then(response => {
        console.log("BRUH");
        return response.json();
    })
    .then(data => {
        init(data);
        info = data;
    });

function makeSlide(imgSrc, name, college, desc) {
    var html = `<div class="slide">
    <img src="${imgSrc}" />
    <p class="name">${name}</p>
    <p class="college">${college}</p>
    <p class="desc">
      <i class="fa-solid fa-quote-left"></i>
      ${desc}
      <i class="fa-solid fa-quote-right"></i>
    </p>
  </div>`;
    return html;
}

function init(data) {
    slides.innerHTML = "";
    var html = "";
    for (let i = 0; i < 3; i++) {
        html += makeSlide(data[i].imageSrc, data[i].name, data[i].college, data[i].desc);
    }
    slides[0].innerHTML = html;
}

function drawSlides(n, data) {
    if (n < 0) {
        slideIndex = data.length + n;
    }
    if (n >= data.length) {
        slideIndex = 0;
    }
    slides.innerHTML = "";
    var html = "";
    for (let i = 0; i < 3; i++) {
        let j = (slideIndex + i) % data.length;
        html += makeSlide(data[j].imageSrc, data[j].name, data[j].college, data[j].desc);
    }
    slides[0].innerHTML = html;
}