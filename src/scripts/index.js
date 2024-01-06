'use strict'

import '../lib/style'
console.log('Hello World')

function makeActive () {
  let allNumerations = document.querySelectorAll('.events__numeration')
  for (let num of allNumerations) {
    num.style.opacity = '0.5'
  }
  let allNumsOfMonth = document.querySelectorAll('.events__num-of-month')
  for (let num of allNumsOfMonth) {
    num.style.opacity = '0.3'
  }
  let allLines = document.querySelectorAll('.events__line')
  for (let num of allLines) {
    num.style.opacity = '0.1'
  }
  let numeration = this.querySelector('.events__numeration')
  let numOfMonth = this.querySelector('.events__num-of-month')
  let line = this.querySelector('.events__line')
  numeration.style.opacity = '1'
  numOfMonth.style.opacity = '1'
  line.style.opacity = '1'
}

document.querySelectorAll('.events__date').forEach((elem) => {
  elem.addEventListener('click', makeActive)
})
