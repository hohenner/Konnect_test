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
You need to have environment variables defined:
| variable name | Description
| --- | --- |
| CYPRESS_USER | User name to log into Konnect |
| CYPRESS_PASSWORD | Password connected to CYPRESS_USER |

## Why Cypress 
1. I believe Javascript is in the Kong technology stack, and using testing frameworks that are in the same language to facilitate discussion
1. It is easy to setup and get some simple tests created
1. It was the framework I used last

## Why Docker
1. Simplifies execution in CI
1. Enables people to run the tests without needing to setup/install Cypress
1. Github Actions do not need Docker so have not setup to used the environment variables or configured for advanced tests

## Next steps
1. decide if cypress is the right driver for a framework 
    1. does not have good API testing support
    1. flaky runs on UI
1. deal with pagination
1. remove wait states
1. setup real framework of re-usable code (?Keyword driven?)
1. setup Page Object Model (abstract out css selectors out of code)
1. add document upload functionality
1. add capturing performance metrics
1. add more negative tests
    1. invalid inputs
1. add security test. 
    1. sql injection
    1. URL hacking
1. add more elements / expansive testing
    1. log out
    1. markdown upload
    1. app registration

1. possible to replicate these tests via API? - Automate

## Problems seen
### Cannot set properties of undefined (setting 'status')
I recieved this error in trying to load the homepage for Konnect, Cypress says it's passed from the application being tested. I wound up capturing the exception and swallowing it. Need to do further exploration on what the cause of the error is, looks like the New Relic Agent
### Cypress issues
1. Cypress has longer loading pages than in person, need to figure out why and handle better
1. Cypress occasionally loads the UI without CSS which causes the scripts to fail, investigate why/how to fix.

### Certificate issue
```
[1652:0620/080057.952954:ERROR:cert_verify_proc_builtin.cc(681)] CertVerifyProcBuiltin for cdn.segment.com failed:
----- Certificate i=0 (OU=Cypress Proxy Server Certificate,O=Cypress Proxy CA,L=Internet,ST=Internet,C=Internet,CN=cdn.segment.com) -----
ERROR: No matching issuer found
```
understand source and solution