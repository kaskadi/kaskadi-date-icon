/* global customElements */
import { KaskadiElement, css, html } from 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-element/kaskadi-element.js'
import locals from './locals.js'
const { weekDayNames, monthNames } = locals

/**
 * An element to display a date as a calendar icon.
 *
 * This also supports styling via custom CSS properties.
 *
 * This element inherits properties from a base class `KaskadiElement`. To see which properties are available, please refer to [`KaskadiElement` documentation](https://github.com/kaskadi/kaskadi-element).
 *
 * @module kaskadi-date-icon
 *
 * @param {string} [date=current date] - date that should be displayed by the element. Supports the same date format as the one you would use when instanciating a new date via the [Date API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)
 *
 * @example
 *
 * <kaskadi-date-icon date="1975-04-07" style="--icon-size: 16px;"></kaskadi-date-icon>
 */

class KaskadiDateIcon extends KaskadiElement {
  constructor () {
    super()
    this.date = Date.now()
  }

  static get styles () {
    return css`
      :host {
        display: inline-block;
        --icon-size: 48px;
        --background-color: white;
        --outline-color: #333;
        --head-color: royalblue;
        --date-color: #333;
        --month-color: white;
        --day-color: #333;
      }
      :host, #outline, #icon {
        width: var(--icon-size);
        height: var(--icon-size);
      }
      #outline {
        background: var(--outline-color);
        border-radius: calc(15 * var(--icon-size) / 90);
      }
      #icon {
        display: grid;
        grid-template-rows: repeat(3, auto);
        box-sizing: border-box;
        border: calc(5 * var(--icon-size) / 90) solid transparent;
        border-radius: calc(15 * var(--icon-size) / 90);
        font-size: calc(35 * var(--icon-size) / 90);
        overflow: hidden;
      }
      #month, #date, #day {
        text-align: center;
        font-weight: bold;
      }
      #date, #day {
        background: var(--background-color);
      }
      #month {
        background: var(--head-color);
        color: var(--month-color);
        font-size: calc(18em/35);
      }
      #date {
        color: var(--date-color);
        font-size: 1em;
      }
      #day {
        color: var(--day-color);
        font-size: calc(14em/35);
        font-weight: 200;
      }
    `
  }

  static get properties () {
    return {
      date: { type: String }
    }
  }

  render () {
    const date = new Date(this.date)
    return html`
    <div id="outline">
      <div id="icon">
        <div id="month">${monthNames[this.lang][date.getMonth()]} ${date.getFullYear() % 100}</div>
        <div id="date">${date.getDate()}</div>
        <div id="day">${weekDayNames[this.lang][date.getDay()]}</div>
      </div>
    </div>`
  }
}

customElements.define('kaskadi-date-icon', KaskadiDateIcon)
