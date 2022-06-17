describe('access ServiceHub', () => {
    it('has valid env values', () => {
      expect(Cypress.env())
        .to.be.an('object')
        .and.to.include.keys('USER', 'PASSWORD')
    })
  
})