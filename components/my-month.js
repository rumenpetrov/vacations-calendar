const template = document.createElement('template');

template.innerHTML = `
  <style>
    .root {
      display: block;
      overflow: hidden;
      border-radius: 10px;
      padding: 10px;
      margin: 20px;
      background-color: #f9f9f9;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease-in-out;
    }

    .root:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    h6 {
      margin: 0 0 10px;
      font-size: 16px;
      line-height: 1.2;
      font-weight: normal;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      text-align: center;
    }
    table tr {
      border-bottom: 1px solid #e9e9e9;
    }
    table th,
    table td {
      padding: 6px;
      font-size: 14px;
    }
    table th {
      background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }
    table td:nth-last-child(2),
    table td:last-child {
      background-color: #f5f7fa;
    }
    table td.suggestion {
      background-image: linear-gradient(225deg, #f5f7fa 0%, #c3cfe2 100%);
    }
    table td.vacantion {
      background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    }
  </style>

  <div class="root">
    <h6 id="name">Month name</h6>

    <table>
      <thead>
        <tr>
          <th>Пон</th>
          <th>Вт</th>
          <th>Ср</th>
          <th>Че</th>
          <th>Пет</th>
          <th>Съб</th>
          <th>Нед</th>
        </tr>
      </thead>
      <tbody id="weeks">
        <tr id="week1"></tr>
        <tr id="week2"></tr>
        <tr id="week3"></tr>
        <tr id="week4"></tr>
        <tr id="week5"></tr>
      </tbody>
    </table>
  </div>
`;

class MyMonth extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.$name = this.shadowRoot.querySelector('#name');
    this.$weeks = this.shadowRoot.querySelector('#weeks');

    this.render(this);
  }

  static get observedAttributes() {
    return ['name', 'weeks'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attributeChangedCallback');
    console.log(name, oldValue, newValue);

    this[name] = newValue;
  }

  render({ name, data }) {
    this.$name.textContent = name || 'Not set';
    this.$weeks.innerHTML = data.weeks.map(week => this.renderWeek(week)).join('');
  }

  renderWeek(week) {
    if (week) {
      return `<tr>${week.map(day => this.renderDay(day)).join('')}</tr>`;
    }

    return '';
  }

  renderDay(day) {
    const vacationDays = this.data.vacation;
    const suggestionDays = this.data.suggestion;

    if (day) {
      if (vacationDays.includes(day) && suggestionDays.includes(day)) {
        return `<td class="vacantion suggestion">${day}</td>`;
      } else if (vacationDays.includes(day)) {
        return `<td class="vacantion">${day}</td>`;
      } else if (suggestionDays.includes(day)) {
        return `<td class="suggestion">${day}</td>`;
      }

      return `<td>${day}</td>`;
    }

    return '<td>&nbsp;</td>';
  }
}

export default MyMonth;
