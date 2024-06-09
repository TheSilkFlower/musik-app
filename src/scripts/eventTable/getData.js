'use strict'

import { day } from './initTable'

// получаем данные из fetch-запроса
export function getDataFromFetch () {
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
