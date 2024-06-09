'use strict'

import '../lib/style'
import './swiper'
import './anchors'
import createDinamicElements from './eventTable/createElements'
import { makeActiveDay, days, loader } from './eventTable/initTable'

// по клику на день в таблице событий запускаем функцию makeActiveDay
days.forEach((elem) => {
  elem.addEventListener('click', makeActiveDay)
})

// при загрузке страницы сразу запрашиваем данные и отображаем в таблице
window.addEventListener('load', () => {
  loader.style.display = 'block'
  createDinamicElements()
})
