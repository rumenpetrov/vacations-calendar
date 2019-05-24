const template = document.createElement('template')

template.innerHTML = `
  <style>
    .root {
      display: block;
      border: 1px solid #ccc;
      border-radius: 3px;
      padding: 6px;
      margin-bottom: 3px;
      background-color: #f9f9f9;
    }
  </style>

  <div class="root">
    <span id="date">2019-12-31</span>
    -
    <span id="title">Default title</span>
  </div>
`

class MyHoliday extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.elDate = this.shadowRoot.querySelector('#date')
    this.elTitle = this.shadowRoot.querySelector('#title')
  }

  connectedCallback () {
    this.render(this)
  }

  static get observedAttributes () {
    return ['date', 'title']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue
    }
  }

  get date () {
    return this.getAttribute('date')
  }

  set date (newValue) {
    this.setAttribute('date', newValue)
    this.render(this)
  }

  get title () {
    return this.getAttribute('title')
  }

  set title (newValue) {
    this.setAttribute('title', newValue)
    this.render(this)
  }

  render ({ date, title }) {
    this.elDate.textContent = date
    this.elTitle.textContent = title
  }
}

window.customElements.define('my-holiday', MyHoliday)
