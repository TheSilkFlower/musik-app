'use strict'

import createDinamicElements from './createElements'

let day = 1 // переменная, содержащая номер дня в табличке, по умолчанию на значении 1
const days = document.querySelectorAll('.events__date')
const allNumerations = document.querySelectorAll('.events__numeration')
const allLines = document.querySelectorAll('.events__line')
const tableHeader = document.querySelector('.events-table__header')
const table = document.querySelector('.events-table__list')
const loader = document.querySelector('.events-loader')

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

export { day, days, makeActiveDay, table, tableHeader, loader }
