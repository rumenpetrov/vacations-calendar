const template = document.createElement('template')

template.innerHTML = `
  <style>
    .root {
      display: block;
      overflow: hidden;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 20px;
      background-color: #f9f9f9;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease-in-out;
    }

    .root:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      text-align: center;
    }

    table caption {
      margin: 0 0 10px;
      font-size: 16px;
      line-height: 1.2;
      font-weight: normal;
      text-align: center;
    }

    table tr th {
      border-bottom: 1px solid #909090;
      font-weight: normal;
    }

    table tr td {
      border-bottom: 1px solid #e9e9e9;
    }

    table tr:last-child td {
      border-bottom: none;
    }

    table th,
    table td {
      padding: 6px;
      font-size: 14px;
    }

    table th {}

    table td:nth-last-child(2),

    table td:last-child {
      background-color: #edf2fb;
    }

    table td.suggestion {
      background-image: linear-gradient(225deg, #f5f7fa 0%, #c3cfe2 100%);
    }

    table td.vacantion {
      background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    }

    table td.pre-month,
    table td.post-month {
      color: #aaa
    }
  </style>

  <div class="root">
    <table>
      <caption id="name">Month name</caption>
      <thead>
        <tr>
          <th>П</th>
          <th>В</th>
          <th>С</th>
          <th>Ч</th>
          <th>П</th>
          <th>С</th>
          <th>Н</th>
        </tr>
      </thead>
      <tbody id="weeks"></tbody>
    </table>
  </div>
`

// TODO:
// - Split into smaller components
// - Split weeks prop into simpler props
// - Reflect props into attributes and add getters and setters for them
class MyMonth extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.elName = this.shadowRoot.querySelector('#name')
    this.elWeeks = this.shadowRoot.querySelector('#weeks')
  }

  connectedCallback () {
    this.render(this)
  }

  render ({ name, weeks }) {
    this.elName.textContent = name || 'Not set'
    this.elWeeks.innerHTML = null

    if (weeks) {
      weeks.forEach(week => {
        this.elWeeks.appendChild(this.renderWeek(week))
      })
    }
  }

  renderWeek (week) {
    if (!week) {
      return false
    }

    const elRow = document.createElement('tr')

    week.forEach(day => {
      elRow.appendChild(this.renderDay(day))
    })

    return elRow
  }

  renderDay (day) {
    const elCell = document.createElement('td')

    if (day.value === 'preMonth') {
      elCell.textContent = 'x'
      elCell.classList.add('pre-month')
    } else if (day.value === 'postMonth') {
      elCell.textContent = 'x'
      elCell.classList.add('post-month')
    } else {
      elCell.textContent = day.value

      if (day.vacation) {
        elCell.classList.add('vacantion')
      }
    }

    return elCell
  }
}

window.customElements.define('my-month', MyMonth)
