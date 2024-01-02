'use strict'

import '../lib/style'
console.log('Hello World')

const width = window.innerWidth
document.addEventListener('DOMContentLoaded', () => {
  if (width < 1200) {
    // eslint-disable-next-line no-unused-vars
    const swiper = new window.Swiper('.swiper', {
      init: true,
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
})
