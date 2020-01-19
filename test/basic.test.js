import '../date-icon.js'
describe('date-icon', () => {
  it('testing', async () => {
    var elem = document.createElement('kaskadi-date-icon')
    elem.setAttribute('date', '1975-04-07')
    elem.setAttribute('style', '--outline-color: rgb(255, 0, 0)')
    document.body.appendChild(elem)
    const res = await elem.updateComplete
    elem.should.have.property('date')
    elem.should.have.property('_date')
    elem.shadowRoot.querySelector('#monat').textContent.should.equal('Apr 75')
    elem.shadowRoot.querySelector('#day').textContent.should.equal('7')
    elem.shadowRoot.querySelector('#name').textContent.should.equal('Montag')
    var bcr = elem.getBoundingClientRect()
    bcr.height.should.equal(48)
    bcr.width.should.equal(48)
    var cs = getComputedStyle(elem.shadowRoot.querySelector('#outline'))
    cs.stroke.should.equal('rgb(255, 0, 0)')
  })
})
