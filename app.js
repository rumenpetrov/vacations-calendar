import './components/my-holiday.js'

import { renderMoth } from './calendar.js'

const API_KEY = 'AIzaSyAs7jRn_U2YncuhCAgefwSaHyupybF5cF4'
const CALENDAR_ID = encodeURIComponent('bg.bulgarian#holiday@group.v.calendar.google.com')
const API = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

const elHolidays = document.getElementById('js-holidays')
const elCalendar = document.getElementById('js-calendar')
const choosenYear = new Date().getFullYear()

fetch(API)
  .then(response => response.json())
  .then(result => {
    result.items.forEach(item => {
      if (item.start.date.includes(choosenYear)) {
        const elHoliday = document.createElement('my-holiday')

        elHoliday.date = item.start.date
        elHoliday.title = item.summary

        elHolidays.appendChild(elHoliday)
      }
    })
  })
  .catch(err => {
    console.error(err)
  })

for (var month = 1; month <= 12; month++) {
  elCalendar.appendChild(renderMoth(month, choosenYear))
}
