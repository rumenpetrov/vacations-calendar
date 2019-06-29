const CALENDAR = {
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

const composeMonthData = (choosenMonth, choosenYear) => {
  const firstDayIndex = getFirstDayOfMonthIndex(choosenMonth, choosenYear)
  const totalDays = getTotalDaysInMonth(choosenMonth, choosenYear)
  const data = [[], [], [], [], [], []]

  for (let i = 1; i < firstDayIndex; i++) {
    data[0].push('-')
  }

  for (let dayOfMonth = 1; dayOfMonth <= totalDays; dayOfMonth++) {
    if (data[0].length < 7) {
      data[0].push(dayOfMonth)
    } else if (data[1].length < 7) {
      data[1].push(dayOfMonth)
    } else if (data[2].length < 7) {
      data[2].push(dayOfMonth)
    } else if (data[3].length < 7) {
      data[3].push(dayOfMonth)
    } else if (data[4].length < 7) {
      data[4].push(dayOfMonth)
    } else if (data[5].length < 7) {
      data[5].push(dayOfMonth)
    }
  }

  while (data[4].length < 7) {
    data[4].push('+')
  }

  while (data[5].length < 7) {
    data[5].push('+')
  }

  return data
}

const renderMoth = (choosenMonth, choosenYear, vacantions) => {
  const captionData = CALENDAR.MONTHS
  const tableHeadData = CALENDAR.DAYS
  const tableBodyData = composeMonthData(choosenMonth, choosenYear)
  const elTable = document.createElement('table')
  const elCaption = document.createElement('caption')
  const elThead = document.createElement('thead')
  const elTbody = document.createElement('tbody')

  elCaption.textContent = captionData[choosenMonth - 1]

  tableHeadData.map(itemValue => {
    const elCell = document.createElement('th')

    elCell.textContent = itemValue

    elThead.appendChild(elCell)
  })

  tableBodyData.map(week => {
    const elWeek = document.createElement('tr')

    week.map(day => {
      const elCell = document.createElement('td')

      elCell.textContent = day

      if (vacantions.includes(day)) {
        elCell.classList.add('vacantion')
      }

      elWeek.appendChild(elCell)
    })

    elTbody.appendChild(elWeek)
  })

  elTable.appendChild(elCaption)
  elTable.appendChild(elThead)
  elTable.appendChild(elThead)
  elTable.appendChild(elTbody)

  return elTable
}

export {
  getFirstDayOfMonthIndex,
  getTotalDaysInMonth,
  composeMonthData,
  renderMoth
}
