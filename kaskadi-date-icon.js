/* global customElements */
import { KaskadiElement, css, html } from 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-element/kaskadi-element.js'
import './locals.js'
class KaskadiDateIcon extends KaskadiElement {
  constructor () {
    super()
    this.size = 64
    this._date = new Date()
    this.lang = 'de'
    this.weekDayNames = {
      de: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
      en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
    this.monthNames = {
      de: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
      en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
    }
  }

  static get styles () {
    return css`
      :host, svg{
        width:var(--icon-size, 48px);
        height:var(--icon-size, 48px);
        display: inline-block;
      }
      #bg { fill: var(--background-color, white) }
      #outline { stroke: var(--outline-color, #333) }
      #head { fill: var(--head-color, royalblue) }
      #day { fill: var(--day-color, var(--outline-color, #333)) }
      #monat { fill: var(--month-color, white) }
      #name { fill: var(--name-color, var(--outline-color, #333)) }

    `
  }

  static get properties () {
    return {
      date: { type: String },
      lang: { type: String }
    }
  }

  render () {
    if (this.date) {
      this._date = new Date(this.date)
    }
    return html`
    <svg viewBox="0 0 100 100">
      <rect id="bg" x="5" y="5" width="90" height="90" rx="15" title="bg"/>
      <path id="head" d="M5 35v -15a 15,15 0 0 1 15 -15h60a15 15 0 0 1 15 15v15z" />
      <rect id="outline" x="5" y="5" width="90" height="90" rx="15" fill="none" stroke-width="5"/>
      <g text-anchor="middle" dominant-baseline="middle" font-weight="bold">
        <text x="50" y="22.5" id="monat" class="txt" font-size="18">${this.monthNames[this.lang][this._date.getMonth()]} ${this._date.getFullYear() % 100}</text>
        <text x="50" y="58" id="day" class="txt" font-size="35">${this._date.getDate()}</text>
        <text x="50" y="82" id="name" class="txt" font-size="14px" font-weight="200"  >${this.weekDayNames[this.lang][this._date.getDay()]}</text>
      </g>
   </svg>`
  }
}

customElements.define('kaskadi-date-icon', KaskadiDateIcon)
