const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

//btn
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + -size * counter + 'px )';

nextBtn.addEventListener('click', () => {
if(counter >= carouselImages.lenght - 1)return;
 carouselSlide.style.transition =  "transform 0.4s ease-in-out";
counter++;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;

    carouselSlide.style.transition =  "transform 0.4s ease-in-out";
   counter--;
   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
   });


   carouselSlide.addEventListener('transitioned' , () => {
    if(carouselImages[counter].id==='lastClone'){
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (size * counter) + 'px)';
    }

    if(carouselImages[counter].id==='firstClone'){
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (size * counter) + 'px)';
    }
   });