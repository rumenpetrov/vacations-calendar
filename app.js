import './components/my-holiday.js'
import './components/my-month.js'

import { composeMonthData, CALENDAR } from './calendar.js'

const API_KEY = 'AIzaSyAs7jRn_U2YncuhCAgefwSaHyupybF5cF4'
const CALENDAR_ID = encodeURIComponent('bg.bulgarian#holiday@group.v.calendar.google.com')
const API = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

const choosenYear = new Date().getFullYear()
const elHolidays = document.getElementById('js-holidays')
const elCalendar = document.getElementById('js-calendar')

fetch(API)
  .then(response => response.json())
  .then(result => {
    const vacationDaysInMonth = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ]

    result.items.forEach(item => {
      if (item.start.date.includes(choosenYear)) {
        const elHoliday = document.createElement('my-holiday')

        elHoliday.date = item.start.date
        elHoliday.title = item.summary

        elHolidays.appendChild(elHoliday)

        const currentMonth = parseInt(item.start.date.substring(5, 7), 10)
        const currentDay = parseInt(item.start.date.substring(8, 10), 10)

        vacationDaysInMonth[currentMonth - 1].push(currentDay)
      }
    })

    for (var month = 1; month <= 12; month++) {
      // elCalendar.appendChild(renderMoth(month, choosenYear, vacationDaysInMonth[month - 1]))
      const elMonth = document.createElement('my-month')

      elMonth.name = CALENDAR.MONTHS[month - 1]
      elMonth.weeks = composeMonthData(month, choosenYear, vacationDaysInMonth[month - 1])

      elCalendar.appendChild(elMonth)
    }
  })
  .catch(err => {
    console.error(err)
  })
