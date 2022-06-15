# Cypress tests for Kong Konnect

In this repo I decided to write some tests against [Kong Konnect](https://konghq.com/kong-konnect) using Cypress.

I am intending on integrating with [Github Actions](https://docs.github.com/en/actions) for CI.

## Work to do
- [x] setup Cypress
- [x] Dockerize Cypress framework
- [ ] Integrate with CI infrastructure
- [ ] Build out tests

## Problems seen
### Cannot set properties of undefined (setting 'status')
I recieved this error in trying to load the homepage for Konnect, I wound up capturing the exception and swallowing it. Need to do further exploration on what the cause of the error is, looks like the New Relic Agent.