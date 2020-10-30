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
    const color = 'rgb(255, 0, 0)'
    elem.setAttribute('style', `--icon-size: 64px; --background-color: ${color}; --outline-color: ${color}; --head-color: ${color}; --day-color: ${color}; --month-color: ${color}; --name-color: ${color}`)
    await elem.updateComplete
    const bcr = elem.getBoundingClientRect()
    bcr.height.should.equal(64)
    bcr.width.should.equal(64)
    const getNodeComputedStyle = (selector) => getComputedStyle(elem.shadowRoot.querySelector(selector))
    getNodeComputedStyle('#bg').fill.should.equal(color)
    getNodeComputedStyle('#outline').stroke.should.equal(color)
    getNodeComputedStyle('#head').fill.should.equal(color)
    getNodeComputedStyle('#day').fill.should.equal(color)
    getNodeComputedStyle('#month').fill.should.equal(color)
    getNodeComputedStyle('#name').fill.should.equal(color)
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
