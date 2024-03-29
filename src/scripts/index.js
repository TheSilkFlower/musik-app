'use strict'

import '../lib/style'
console.log('Hello World')

// функция для определения активного дня
function makeActiveDay () {
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
  elem.addEventListener('click', makeActiveDay)
})

// eslint-disable-next-line no-unused-vars
const genres = new window.Swiper('.genres-swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
})

// eslint-disable-next-line no-unused-vars
const aboutSwiper = new window.Swiper('.about-swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: false,
  effect: 'cards',
  autoplay: {
    delay: 4000
  }
})

// eslint-disable-next-line no-unused-vars
const singer = new window.Swiper('.singer-swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 5,
  autoplay: {
    delay: 5000
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
})

// eslint-disable-next-line no-unused-vars
const mention = new window.Swiper('.mention-swiper', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 20,
  slidesPerView: 1.8,
  centeredSlides: true,
  initialSlide: 1,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
})

// eslint-disable-next-line no-unused-vars
const gallery = new window.Swiper('.gallery-swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1.5,
  spaceBetween: 20,
  initialSlide: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
}
)
