const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 's9vrxy',
  viewportHeight: 880,
  viewportWidth: 1280,
  video: true,
  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalRunAllSpecs: true,
    failOnStatusCode: false,
    experimentalSessionSupport: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
