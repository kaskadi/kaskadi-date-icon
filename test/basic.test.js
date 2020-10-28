/* eslint-env browser, mocha */
import '../kaskadi-date-icon.js'
import locals from '../locals.js'
const { weekDayNames, monthNames } = locals

describe('kaskadi-date-icon', () => {
  let elem
  before(async () => {
    elem = document.createElement('kaskadi-date-icon')
    document.body.appendChild(elem)
    await elem.updateComplete
  })
  it('should handle custom CSS styles', async () => {
    elem.setAttribute('style', '--outline-color: rgb(255, 0, 0)')
    await elem.updateComplete
    const bcr = elem.getBoundingClientRect()
    bcr.height.should.equal(48)
    bcr.width.should.equal(48)
    const cs = getComputedStyle(elem.shadowRoot.querySelector('#outline'))
    cs.stroke.should.equal('rgb(255, 0, 0)')
  })
  it('should handle absence of date attribute', async () => {
    elem.should.have.property('date')
    const date = new Date()
    elem.shadowRoot.querySelector('#month').textContent.should.equal(`${monthNames.en[date.getMonth()]} ${date.getFullYear() % 100}`)
    elem.shadowRoot.querySelector('#day').textContent.should.equal(`${date.getDate()}`)
    elem.shadowRoot.querySelector('#name').textContent.should.equal(`${weekDayNames.en[date.getDay()]}`)
  })
  it('should render a date as a calendar', async () => {
    elem.setAttribute('lang', 'de')
    elem.setAttribute('date', '1975-04-07')
    await elem.updateComplete
    elem.should.have.property('date')
    elem.shadowRoot.querySelector('#month').textContent.should.equal('Apr 75')
    elem.shadowRoot.querySelector('#day').textContent.should.equal('7')
    elem.shadowRoot.querySelector('#name').textContent.should.equal('Montag')
  })
})
