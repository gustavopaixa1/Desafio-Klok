const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 's9vrxy',
  viewportHeight: 880,
  viewportWidth: 1280,
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalRunAllSpecs: true,
    failOnStatusCode: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
