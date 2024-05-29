'use strict'

const anchor = document.querySelector('.button_red')
anchor.addEventListener('click', () => {
  document.querySelector('#target-anchor').scrollIntoView({
    behavior: 'smooth'
  })
})
