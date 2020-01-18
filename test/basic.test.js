import '../date-icon.js'
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', async () => {
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
      elem.getBoundingClientRect().height.should.be(48)
      var cs = getComputedStyle(elem.shadowRoot.querySelector('#outline'))
      cs.stroke.should.equal('rgb(255, 0, 0)')
    })
  })
})
