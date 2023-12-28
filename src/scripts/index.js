'use strict'

import '../lib/style'
console.log('Hello World')

new window.Swiper('.swiper', {
  slidesPerView: 1,
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
