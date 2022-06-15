const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,

  e2e: {
    baseUrl: "https://konnect.konghq.com",
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
