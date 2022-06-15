# Cypress tests for Kong Konnect

In this repo I decided to write some tests against [Kong Konnect](https://konghq.com/kong-konnect) using Cypress.

I am intending on integrating with [Github Actions](https://docs.github.com/en/actions) for CI.

## Work to do
- [x] setup Cypress
- [x] Dockerize Cypress framework
- [x] Integrate with CI infrastructure
- [ ] Build out tests

## Why Cypress 
1. I believe Javascript is in the Kong technology stack, and using testing frameworks that are in the same language to facilitate discussion
1. It is easy to setup and get some simple tests created
1. It was the framework I used last

## Why Docker
1. Simplifies execution in CI
1. Enables people to run the tests without needing to setup/install Cypress
1. Github Actions do not need Docker so have not setup variables or configured for advanced tests

## Problems seen
### Cannot set properties of undefined (setting 'status')
I recieved this error in trying to load the homepage for Konnect, I wound up capturing the exception and swallowing it. Need to do further exploration on what the cause of the error is, looks like the New Relic Agent