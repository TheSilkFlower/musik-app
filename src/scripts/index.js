'use strict'

import '../lib/style'
console.log('Hello World')

let allNumerations = document.querySelectorAll('.events__numeration')
let allLines = document.querySelectorAll('.events__line')
let tableBlock = document.querySelectorAll('.events-table__timing')
// let table = document.querySelector('.events-table__list')
let loader = document.querySelector('.events-loader')
let el

// функция для определения активного дня
function makeActiveDay () {
  for (let num of allNumerations) {
    num.style.opacity = '0.5'
  }
  for (let num of allLines) {
    num.style.opacity = '0.1'
  }

  let numeration = this.querySelector('.events__numeration')
  let line = this.querySelector('.events__line')
  numeration.style.opacity = '1'
  line.style.opacity = '1'

  // скрываем данные таблицы
  for (el of tableBlock) {
    el.style.opacity = 0
  }
  // отображаем лоадер
  loader.style.display = 'block'
}

// получаем данные из fetch-запроса
function getDataFromFetch () {
  fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=DrArtOzm58BOTnvtou46RbvwbG7uRTCb')
  // let res = await data.json()
  // let result = await res['_embedded'].events
  // console.log(result)
  // let infoEvent = []
  // result.slice(0, 5).forEach(elem => {
  //   infoEvent.push([elem.name, elem._embedded.venues[0].name, elem.dates.start.localDate, elem.dates.start.localTime, elem.images[0].url, elem.url])
  //   infoEvent.slice(0, 5)
  // })
  // console.log(infoEvent)
  // return infoEvent
}

getDataFromFetch()

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
