'use strict'

import '../lib/style'
console.log('Hello World')

    // eslint-disable-next-line no-unused-vars
const swiper = new window.Swiper('.swiper', {
  init: true,
  breakpoints: {
    1600: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  },
  spaceBetween: 30,
  loop: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  effect: 'fade',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  pagination: {
    el: '.swiper-pagination'
  }
})
