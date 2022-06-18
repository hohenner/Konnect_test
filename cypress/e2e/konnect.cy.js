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

const title = 'Test_Service_' + Date.now()

function login(user,password) {
  cy.visit("") 
    cy.get('#email').click()
    cy.get('#email').type(user)
    cy.get('#password').click()
    cy.get('#password').type(password)
    cy.get('button[type=submit]').click()
}

describe('Konnet tests', () => {
  it('Access Service Hub', () => {
    login(Cypress.env('USER'),Cypress.env('PASSWORD'))
    cy.get('a[data-tourid=create-service-btn]').should('be.visible')
  })

  it('create new Service', () => {
    login(Cypress.env('USER'),Cypress.env('PASSWORD'))
    cy.get('a[data-tourid=create-service-btn]').click()
    cy.get('div[data-testid~=title-create]', { timeout: 100000 }).should('be.visible');
    cy.get('#name').type(title)
    cy.get('#version').type(title)
    cy.get('#description').type(title)
    cy.get('button[type=submit]').click()    
    cy.get('div[data-testid=packageName]', { timeout: 100000 }).should('contain',title)
  })


  it('add version', () => {
    const timestamp = Date.now()
    login(Cypress.env('USER'),Cypress.env('PASSWORD'))
    cy.get(`div[data-testid=${title}`).contains(title).should('have.length',1)
    cy.get(`div[data-testid=${title}`).find('.k-card-body').should('have.length',1)
    cy.get(`div[data-testid=${title}`).contains(title).click()
    cy.get('div[data-testid=packageName]', { timeout: 100000 }).should('contain',title)
    cy.get('button[data-testid=service-package-actions').click()
    cy.get('li[data-testid=add-version]').find('button').click()
    cy.get('input[name=version]', { timeout: 100000 }).type(timestamp)
    cy.get('button[type=submit]').click()    
    cy.get(`div[data-testid=title-${timestamp}]`, { timeout: 100000 }).should('contain',timestamp)
  })

  // it('add version', () => {
  //   const timestamp = Date.now()
  //   login(Cypress.env('USER'),Cypress.env('PASSWORD'))
  //   cy.get(`div[data-testid=${title}`).contains(title).should('have.length',1)
  //   cy.get(`div[data-testid=${title}`).find('.k-card-body').should('have.length',1)
  //   cy.get(`div[data-testid=${title}`).contains(title).click()
  //   cy.get('div[data-testid=packageName]', { timeout: 100000 }).should('contain',title)
  //   cy.get('button[data-testid=service-package-actions').click()
  //   cy.get('li[data-testid=add-version]').find('button').click()
  //   cy.get('input[name=version]', { timeout: 100000 }).type(timestamp)
  //   cy.get('button[type=submit]').click()    
  //   cy.get(`div[data-testid=title-${timestamp}]`, { timeout: 100000 }).should('contain',timestamp)
  //   cy.screenshot()
  // })
})
