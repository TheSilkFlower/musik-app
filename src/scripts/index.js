'use strict'

import '../lib/style'
console.log('Hello World')

let allNumerations = document.querySelectorAll('.events__numeration')
let allLines = document.querySelectorAll('.events__line')
let tableBlock = document.querySelectorAll('.events-table__timing')
let table = document.querySelector('.events-table__list')
let loader = document.querySelector('.events-loader')
let el // элемент таблицы для скрытия/отображения

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
  return fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=DrArtOzm58BOTnvtou46RbvwbG7uRTCb')
  .then(res => res.json())
  .then(result => result['_embedded'].events)
  .then(r => {
    // console.log(r)
    let infoEvent = []
    r.slice(0, 15).forEach(elem => {
      infoEvent.push([elem.name, elem._embedded.attractions, elem.dates.start.localDate, elem.dates.start.localTime, elem.url])
    })
    infoEvent = infoEvent.slice(0, 5)
    console.log(infoEvent)
    return infoEvent
  })
}

// создаём динамически элементы разметки с данными, полученными асинхронно
function createDinamicElements () {
  getDataFromFetch()
  .then(events => {
    events.forEach(el => {
      const concertName = document.createElement('div')
      concertName.classList.add('events-table__description')
      concertName.textContent = el[0]
      const artists = document.createElement('div')
      const artistName = document.createElement('div')
      const artistImg = document.createElement('img')
      artists.classList.add('events-table__artists')
      artistName.classList.add('events-table__artist-name')
      artistImg.classList.add('events-table__artist-img')
      let arr = []
      for (let el of el[1]) {
        arr.push([el.images[0].url, el.name])
      }
      // выбираем до 4 элементов массива и из каждого записываем в разметку имя артиста + путь к картинке
      arr.slice(0, 4).forEach(elem => {
        artistImg.src = elem[0]
        artistName.textContent = elem[1]
        artists.innerHTML += `<div class="events-table__artist">${artistImg.outerHTML} ${artistName.outerHTML}</div>`
      })
      const localDate = document.createElement('p')
      localDate.classList.add('events-table__fulltime')
      localDate.textContent = el[2].split('-').reverse().join('.')
      const localTime = document.createElement('p')
      localTime.classList.add('events-table__datetime')
      localTime.textContent = el[3].slice(0, 5)
      const link = document.createElement('a')
      link.classList.add('events-table__network')
      link.href = el[4]
      const linkImg = document.createElement('img')
      linkImg.classList.add('events-table__network-img')
      linkImg.src = '/musik-app/src/assets/images/aiga.svg'
      link.append(linkImg)

      // вносим данные из массива в таблицу
      let tableData = `<div class="events-table__time">${localDate.outerHTML}${localTime.outerHTML}</div>${concertName.outerHTML}${artists.outerHTML}${link.outerHTML}`
      let div = document.createElement('div')
      div.classList.add('events-table__timing')
      div.innerHTML = tableData
      table.append(div)
    })
  })
}

document.querySelectorAll('.events__date').forEach((elem) => {
  elem.addEventListener('click', makeActiveDay)
})

// при загрузке страницы сразу запрашиваем данные и отображаем в таблице
window.addEventListener('load', () => {
  createDinamicElements()
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
