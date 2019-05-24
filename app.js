import './components/my-holiday.js'

const API_KEY = 'AIzaSyAs7jRn_U2YncuhCAgefwSaHyupybF5cF4'
const CALENDAR_ID = encodeURIComponent('bg.bulgarian#holiday@group.v.calendar.google.com')
const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
const elRoot = document.getElementById('root')

fetch(url)
  .then(response => response.json())
  .then(result => {
    console.log(result)

    result.items.forEach(item => {
      if (item.start.date.includes('2019')) {
        const elParagraph = document.createElement('p')

        elParagraph.textContent = `${item.start.date} - ${item.summary}`
        elRoot.appendChild(elParagraph)
      }
    })
  })
  .catch(err => {
    console.error(err)
  })
