const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "./cypress/tests/**.*",
    baseUrl: "https://sme-internal-dev.cimb.redoc.co",
    chromeWebSecurity: false,
  
  },
  defaultCommandTimeout: 7000
});
