FROM cypress/included:9.6.0
WORKDIR /e2e
COPY . /e2e
RUN yarn install
RUN cypress install
ENTRYPOINT ./run_cypress.sh