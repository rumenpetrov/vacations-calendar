const CALENDAR = {
  API: {
    ACCESS_KEY: 'AIzaSyAs7jRn_U2YncuhCAgefwSaHyupybF5cF4',
    CALENDAR_ID: encodeURIComponent('bg.bulgarian#holiday@group.v.calendar.google.com'),
    get URL () {
      return `https://www.googleapis.com/calendar/v3/calendars/${this.CALENDAR_ID}/events?key=${this.ACCESS_KEY}`
    }
  },
  MONTHS: ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'],
  DAYS: ['П', 'В', 'С', 'Ч', 'П', 'С', 'Н']
}

// 1 - Monday
// 2 - Tuesday
// 3 - Wednesday
// 4 - Thursday
// 5 - Friday
// 6 - Saturday
// 7 - Sunday
const getFirstDayOfMonthIndex = (month, year) => {
  const index = new Date(year, month - 1).getDay()
  let realIndex = 1

  if (index === 0) {
    realIndex = 7
  } else {
    realIndex = index
  }

  return realIndex
}

const getTotalDaysInMonth = (month, year) => {
  return 32 - new Date(year, month - 1, 32).getDate()
}

const composeMonthData = (choosenMonth, choosenYear, vacations) => {
  const firstDayIndex = getFirstDayOfMonthIndex(choosenMonth, choosenYear)
  const totalDays = getTotalDaysInMonth(choosenMonth, choosenYear)
  const data = [[], [], [], [], [], []]

  for (let i = 1; i < firstDayIndex; i++) {
    data[0].push({
      value: 'preMonth',
      vacations: []
    })
  }

  for (let dayOfMonth = 1; dayOfMonth <= totalDays; dayOfMonth++) {
    if (data[0].length < 7) {
      data[0].push({
        value: dayOfMonth,
        vacation: vacations.includes(dayOfMonth)
      })
    } else if (data[1].length < 7) {
      data[1].push({
        value: dayOfMonth,
        vacation: vacations.includes(dayOfMonth)
      })
    } else if (data[2].length < 7) {
      data[2].push({
        value: dayOfMonth,
        vacation: vacations.includes(dayOfMonth)
      })
    } else if (data[3].length < 7) {
      data[3].push({
        value: dayOfMonth,
        vacation: vacations.includes(dayOfMonth)
      })
    } else if (data[4].length < 7) {
      data[4].push({
        value: dayOfMonth,
        vacation: vacations.includes(dayOfMonth)
      })
    } else if (data[5].length < 7) {
      data[5].push({
        value: dayOfMonth,
        vacation: vacations.includes(dayOfMonth)
      })
    }
  }

  while (data[4].length < 7) {
    data[4].push({
      value: 'postMonth',
      vacations: []
    })
  }

  while (data[5].length < 7) {
    data[5].push({
      value: 'postMonth',
      vacations: []
    })
  }

  return data
}

export {
  CALENDAR,
  getFirstDayOfMonthIndex,
  getTotalDaysInMonth,
  composeMonthData
}
