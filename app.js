// @flow

import MyMonth from './components/my-month.js';

customElements.define('my-month', MyMonth);

const rootEl = document.getElementById('root');

fetch('./db/2019.json')
  .then(response => response.json())
  .then((data) => {
    data.months.map((item) => {
      const monthEl = document.createElement('my-month');

      monthEl.name = item.name;
      monthEl.data = item;

      rootEl.appendChild(monthEl);

      return false;
    });
  })
  .catch(err => console.error(err));
