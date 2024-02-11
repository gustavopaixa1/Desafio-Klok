const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  video: true,
  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalRunAllSpecs: true,
    failOnStatusCode: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
