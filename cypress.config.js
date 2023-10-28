const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  projectId: 'wzn97t',




  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber())
    },
    baseUrl: "https://demoqa.com/",
    specPattern:"cypress/e2e/Features/*.feature"
  },
});
