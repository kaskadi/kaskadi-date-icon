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
      :host, svg{
        width:var(--icon-size, 48px);
        height:var(--icon-size, 48px);
        display: inline-block;
      }
      #bg {
        fill: var(--background-color, white);
      }
      #outline {
        stroke: var(--outline-color, #333);
      }
      #head {
        fill: var(--head-color, royalblue);
      }
      #day {
        fill: var(--day-color, var(--outline-color, #333));
      }
      #month {fill: var(--month-color, white);
      }
      #name {
        fill: var(--name-color, var(--outline-color, #333));
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
    <svg viewBox="0 0 100 100">
      <rect id="bg" x="5" y="5" width="90" height="90" rx="15" title="bg"/>
      <path id="head" d="M5 35v -15a 15,15 0 0 1 15 -15h60a15 15 0 0 1 15 15v15z" />
      <rect id="outline" x="5" y="5" width="90" height="90" rx="15" fill="none" stroke-width="5"/>
      <g text-anchor="middle" dominant-baseline="middle" font-weight="bold">
        <text x="50" y="22.5" id="month" class="txt" font-size="18">${monthNames[this.lang][date.getMonth()]} ${date.getFullYear() % 100}</text>
        <text x="50" y="58" id="day" class="txt" font-size="35">${date.getDate()}</text>
        <text x="50" y="82" id="name" class="txt" font-size="14px" font-weight="200"  >${weekDayNames[this.lang][date.getDay()]}</text>
      </g>
   </svg>`
  }
}

customElements.define('kaskadi-date-icon', KaskadiDateIcon)
