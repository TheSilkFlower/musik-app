'use strict'

import '../lib/style'
console.log('Hello World')
// eslint-disable-next-line no-unused-vars
const swiper = window.Swiper('.swiper', {
  init: true,
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  pagination: {
    el: '.swiper-pagination'
  }
})
