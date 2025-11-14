const {readPdf } = require('./cypress/support/helper')

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      readPdf
      // implement node event listeners here
    },
    //defaultCommandTimeout: 10000,
    experimentalStudio: true
  },
});
