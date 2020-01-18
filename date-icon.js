import { html, css, LitElement } from 'https://cdn.klimapartner.net/modules/lit-element/lit-element.js'

class KaskadiDateIcon extends LitElement {
  constructor () {
    super()
    this.size = 64
    this._date = new Date()
    this.weekDayNames = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
    this.monthNames = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
  }

  static get styles () {
    return css`
      :host{
        display:inline-block;
      }
      #bg{
        fill: var(--background-color, white);
      }
      #outline{
        fill: none;
        stroke: var(--outline-color, #333);
        stroke-width: 5px
      }
      #head{
        fill: var(--head-color, royalblue)
      }
      .txt{
        text-anchor:middle;
        dominant-baseline: middle;

      }
      #day{
        font-size:35px;
        fill: var(--day-color, var(--outline-color, #333));
        font-weight:bold;
      }
      #monat{
        fill: var(--month-color, white);
        font-weight:bold;
        font-size:18px;
      }
      #name{
        fill: var(--name-color, var(--outline-color, #333));
        font-size:14px;
      }
      svg{
        width:var(--icon-size, 48px);
        height:var(--icon-size, 48px);
      }
    `
  }

  static get properties () {
    return {
      date: { type: String }
    }
  }

  // *** Rendering of our element into the DOM ***
  render () {
    if (this.date) {
      this._date = new Date(this.date)
    }
    return html`<svg viewBox="0 0 100 100">
      <rect id="bg" x="5" y="5" width="90" height="90" rx="15"/>
      <path id="head" d="M5 35v -15a 15,15 0 0 1 15 -15h60a15 15 0 0 1 15 15v15z" />
      <rect id="outline" x="5" y="5" width="90" height="90" rx="15"/>
      <text x="50" y="22.5" id="monat" class="txt" >${this.monthNames[this._date.getMonth()]} ${this._date.getFullYear() % 100}</text>
      <text x="50" y="58" id="day" class="txt">${this._date.getDate()}</text>
      <text x="50" y="82" id="name" class="txt" >${this.weekDayNames[this._date.getDay()]}</text>
   </svg>`
  }
}
// Element export
customElements.define('kaskadi-date-icon', KaskadiDateIcon)
