'use strict'

// Place other JavaScript modules in the 'lib' folder
import 'assets/styles/index.less'
import Swiper from 'swiper'

console.log('Style applied')
const swiper = new Swiper('.swiper', {
speed: 400,
spaceBetween: 100,
})

export default 'style module'
