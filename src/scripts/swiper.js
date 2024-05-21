'use strict'

// eslint-disable-next-line no-unused-vars
export const genres = new window.Swiper('.genres-swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  navigation: {
    prevEl: '.genres-prev',
    nextEl: '.genres-next'
  }
})
// eslint-disable-next-line no-unused-vars
export const singer = new window.Swiper('.singer-swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 5,
  grabCursor: true,
  autoplay: {
    delay: 2000
  }
})
// eslint-disable-next-line no-unused-vars
export const mention = new window.Swiper('.mention-swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 2,
  centeredSlides: true,
  initialSlide: 1,
  navigation: {
    prevEl: '.mention-prev',
    nextEl: '.mention-next'
  }
})
// eslint-disable-next-line no-unused-vars
export const mentionMobile = new window.Swiper('.mention-mobile-swiper', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 20,
  slidesPerView: 1.8,
  centeredSlides: true,
  initialSlide: 1,
  navigation: {
    prevEl: '.mention-mobile-prev',
    nextEl: '.mention-mobile-next'
  }
})
// eslint-disable-next-line no-unused-vars
export const gallery = new window.Swiper('.gallery-swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: 5,
  slidePerGroup: 3,
  centeredSlides: true,
  spaceBetween: 10,
  initialSlide: 0,
  navigation: {
    prevEl: '.gallery-prev',
    nextEl: '.gallery-next'
  }
}
)
// eslint-disable-next-line no-unused-vars
export const galleryMobile = new window.Swiper('.gallery-mobile-swiper', {
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
  }
}
)
