'use strict'

import '../lib/style'
console.log('Hello World')

function makeActive () {
  let allNumerations = document.querySelectorAll('.events__numeration')
  for (let num of allNumerations) {
    num.style.opacity = '0.5'
  }
  let allNumsOfMonth = document.querySelectorAll('.events__num-of-month')
  for (let num of allNumsOfMonth) {
    num.style.opacity = '0.3'
  }
  let allLines = document.querySelectorAll('.events__line')
  for (let num of allLines) {
    num.style.opacity = '0.1'
  }
  let numeration = this.querySelector('.events__numeration')
  let numOfMonth = this.querySelector('.events__num-of-month')
  let line = this.querySelector('.events__line')
  numeration.style.opacity = '1'
  numOfMonth.style.opacity = '1'
  line.style.opacity = '1'
}

document.querySelectorAll('.events__date').forEach((elem) => {
  elem.addEventListener('click', makeActive)
})

const swiper = new window.Swiper('.genres-swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  initialSlide: 2,
  centeredSlides: true,
  spaceBetween: 30,
  loop: false,
  effect: 'fade',
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
})

console.log(swiper)

// setInterval(() => {
//   const sign = document.querySelector('.contacts-signs__img')
//   sign.classList.remove('.contacts-signs__img-animate')
//   sign.classList.add('.contacts-signs__img-animate')
// }, 7000)
