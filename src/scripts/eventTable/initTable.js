'use strict'

let day = 1 // переменная, содержащая номер дня в табличке, по умолчанию на значении 1
export const days = document.querySelectorAll('.events__date')
const allNumerations = document.querySelectorAll('.events__numeration')
const allLines = document.querySelectorAll('.events__line')
const tableHeader = document.querySelector('.events-table__header')
const table = document.querySelector('.events-table__list')
export const loader = document.querySelector('.events-loader')

// находим индекс выбранного дня и по нему присваиваем переменной day номер 1/2/3
days.forEach((elem, i) => {
  elem.addEventListener('click', () => {
    switch (i) {
      case 0:
        day = 1
        break
      case 1:
        day = 2
        break
      case 2:
        day = 3
        break
    }
    return day
  })
})

// функция для определения активного дня
export function makeActiveDay () {
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

  // очищаем таблицу и покаызываем лоадер
  table.innerHTML = ''
  loader.style.display = 'block'

  // на время загрузки показываем скруглённую рамку для header
  tableHeader.style.borderBottomLeftRadius = '24px'
  tableHeader.style.borderBottomRightRadius = '24px'

  // по истечении 2 секунд скрываем лоадер и заполняем таблицу данными
  setTimeout(() => {
    createDinamicElements()
  }, 2000)
}

// получаем данные из fetch-запроса
function getDataFromFetch () {
  return fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=DrArtOzm58BOTnvtou46RbvwbG7uRTCb')
  .then(res => res.json())
  .then(result => result['_embedded'].events)
  .then(r => {
    let infoEvent = []
    r.slice(0, 15).forEach(elem => {
      infoEvent.push([elem.name, elem._embedded.attractions, elem.dates.start.localDate, elem.dates.start.localTime, elem.url, elem.priceRanges, elem._embedded.venues[0]])
    })
    return infoEvent
  }).then(info => { // в зависимости от текущего дня оставляем нужные 5 events
    switch (day) {
      case 1:
        info = info.slice(0, 5)
        break
      case 2:
        info = info.slice(5, 10)
        break
      case 3:
        info = info.slice(10, 15)
        break
    }
    console.log(info)
    return info
  })
}

// создаём динамически элементы разметки с данными, полученными асинхронно
export function createDinamicElements () {
  table.innerHTML = ''
  getDataFromFetch()
  .then(events => {
    events.forEach(el => {
      const concertName = document.createElement('p')
      concertName.classList.add('events-table__description-event')
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
      link.target = '_blank'
      const linkImg = document.createElement('img')
      linkImg.classList.add('events-table__network-img')
      linkImg.src = '/musik-app/src/assets/images/aiga333.svg'
      link.append(linkImg)
      const price = document.createElement('p')
      const priceCurr = document.createElement('span')
      price.classList.add('events-table__description-price')
      priceCurr.classList.add('events-table__description-price-curr')
      if (el[5] !== undefined) { // если получено/имеется значение priceRanges - выводим информацию о стоимости
        if (el[5][0].min !== undefined && el[5][0].max !== undefined) {
          price.textContent = `min: ${el[5][0].min}, max: ${el[5][0].max}, `
          priceCurr.textContent = el[5][0].currency
          price.append(priceCurr)
        } else {
          price.textContent = ''
        }
      } else {
        price.textContent = ''
      }
      const place = document.createElement('p')
      place.classList.add('events-table__description-place')
      place.textContent = `${el[6].address.line1}, ${el[6].name}, ${el[6].city.name}, ${el[6].state.name}`

      // вносим данные из массива в таблицу
      let tableData = `<div class="events-table__time">${localDate.outerHTML}${localTime.outerHTML}</div><div class="events-table__description">${concertName.outerHTML}${price.outerHTML}${place.outerHTML}</div>${artists.outerHTML}${link.outerHTML}`
      let div = document.createElement('div')
      let line = document.createElement('div')
      line.classList.add('events-table__line')
      div.classList.add('events-table__timing')
      div.innerHTML = tableData
      table.append(div, line)

      tableHeader.style.borderBottomLeftRadius = 'inherit'
      tableHeader.style.borderBottomRightRadius = 'inherit'
      loader.style.display = 'none'
    })
  })
}
