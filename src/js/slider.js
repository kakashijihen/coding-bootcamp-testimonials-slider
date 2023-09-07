import { students } from "./students";

//valores del slider de imagenes
const slider = document.querySelector('.card-carrousel-slider');
const info = document.querySelector('.card-carrousel-info');
const sliderImgs = slider.querySelectorAll('.card-carrousel-slider-img');
const  infoTestimonial=info.querySelectorAll('.user-testimonial')
const infoDetails=info.querySelectorAll('.user-details')
const prevBtn = slider.querySelector('#prev-btn');
const nextBtn = slider.querySelector('#next-btn');

const totalImgs=sliderImgs.length

let activeIndex = 0;

const showActiveItem=()=>{
 sliderImgs.forEach(item => item.classList.remove('active'));  
 sliderImgs[activeIndex].classList.add('active');

 infoTestimonial.forEach(item=> item.classList.remove('active'))
 infoTestimonial[activeIndex].classList.add('active')
 
 infoDetails.forEach(item=> item.classList.remove('active'))
 infoDetails[activeIndex].classList.add('active')
}



const showNextItem=()=>{
    activeIndex++

    if (activeIndex>=totalImgs) {
        activeIndex=0
    }
    showActiveItem()

}

const showPrevItem=()=>{
    activeIndex--

    if (activeIndex< 0) {
        activeIndex=totalImgs-1;
    }
    showActiveItem()
}


prevBtn.addEventListener('click', showPrevItem);
nextBtn.addEventListener('click',showNextItem);
showActiveItem();

