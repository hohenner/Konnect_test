# Cypress tests for Kong Konnect

In this repo I decided to write some tests against [Kong Konnect](https://konghq.com/kong-konnect) using Cypress.

I am intending on integrating with [Github Actions](https://docs.github.com/en/actions) for CI.

## Work to do
- [x] setup Cypress
- [x] Dockerize Cypress framework

### Tests to Run
- [x] Authenticate and access ServiceHub
- [x] Complete the flow to create a new Service
- [x] Create any additional entities associated with a Service

### Nice to haves
- [x] Generate Reporting
- [x] Integrate with CI infrastructure

## How to run
To setup run:
 ```
 npm install
 yarn install
 ```

To run:
```
yarn cypress:run
```


## Why Cypress 
1. I believe Javascript is in the Kong technology stack, and using testing frameworks that are in the same language to facilitate discussion
1. It is easy to setup and get some simple tests created
1. It was the framework I used last

## Why Docker
1. Simplifies execution in CI
1. Enables people to run the tests without needing to setup/install Cypress
1. Github Actions do not need Docker so have not setup variables or configured for advanced tests

## Next steps
1. decide if cypress is the right driver for a framework 
1. remove wait states
1. setup real framework of re-usable code (?Keyword driven?)
1. setup Page Object Model (abstract out css selectors out of code)
1. add document upload functionality

## Problems seen
### Cannot set properties of undefined (setting 'status')
I recieved this error in trying to load the homepage for Konnect, I wound up capturing the exception and swallowing it. Need to do further exploration on what the cause of the error is, looks like the New Relic Agent
### Cypress issues
1. Cypress has longer loading pages than in person, need to figure out why and handle better
1. Cypress occasionally loads the UI without CSS which causes the scripts to fail, investigate why/how to fix.