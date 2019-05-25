import './components/my-holiday.js'

const API_KEY = 'AIzaSyAs7jRn_U2YncuhCAgefwSaHyupybF5cF4'
const CALENDAR_ID = encodeURIComponent('bg.bulgarian#holiday@group.v.calendar.google.com')
const API = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
const elRoot = document.getElementById('root')

fetch(API)
  .then(response => response.json())
  .then(result => {
    result.items.forEach(item => {
      if (item.start.date.includes('2019')) {
        const elHoliday = document.createElement('my-holiday')

        elHoliday.date = item.start.date
        elHoliday.title = item.summary

        elRoot.appendChild(elHoliday)
      }
    })
  })
  .catch(err => {
    console.error(err)
  })
