Cypress.on('uncaught:exception', (err, runnable) => {
  // Looks like ?New Relic agent? throws an error for cypress
  // error message:
  //   TypeError: The following error originated from your application code, not from Cypress.
  //   > Cannot set properties of undefined (setting 'status')
  // When Cypress detects uncaught errors originating from your application it will automatically fail the current test.
  // This behavior is configurable, and you can choose to turn this off by listening to the `uncaught:exception` event.
  // https://on.cypress.io/uncaught-exception-from-application
  //       at i (https://konnect.konghq.com/:19:13659)
  //       at XMLHttpRequest.<anonymous> (https://konnect.konghq.com/:19:14262)
  //       at XMLHttpRequest.nrWrapper (https://konnect.konghq.com/:19:26440)

  if (err.message.includes("setting 'status'")) {
    return false
  }

  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})


describe('access ServiceHub', () => {
  it('passes', () => {
    cy.visit("") 
    cy.get('#email').click()
    cy.get('#email').type(Cypress.env('USER'))
    cy.get('#password').click()
    cy.get('#password').type(Cypress.env('PASSWORD'))
    cy.get('button[type=submit]').click()
  })


  it('has valid env values', () => {
    expect(Cypress.env())
      .to.be.an('object')
      .and.to.include.keys('USER', 'PASSWORD')
  })

})

// describe('create new Service', () => {
//   it('passes', () => {
//     cy.visit("") 
//   })
// })

// describe('add entities', () => {
//   it('passes', () => {
//     cy.visit("") 
//   })
// })