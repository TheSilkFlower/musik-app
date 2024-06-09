'use strict'
import { table, tableHeader, loader } from './initTable'
import { getDataFromFetch } from './getData'

// создаём динамически элементы разметки с данными, полученными асинхронно
export default function createDinamicElements () {
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
