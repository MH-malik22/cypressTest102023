const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const mysql = require('cypress-mysql');
const { reject } = require("cypress/types/bluebird");
const { result } = require("cypress/types/lodash");
module.exports = defineConfig({
  projectId: 'wzn97t',
  chromeWebSecurity: false,
  defaultCommandTimeout: 60000,
  execTimeout: 60000,
  pageloadTimeout: 60000,
  requestTimeout: 40000,
  responseTimeout: 40000,
  viewportHeight: 1200,
  viewportWidth: 1920,
  redirectionLimit: 50,
  numTestsKeptInMemory: 0,
  trashAssetsBeforeRuns: true,
  screenshotOnRunFailure: true,
  video: false,
  videoCompression: false,
  videoUploadOnPasses: false,
  experimentalWebKitSupport: true,
  
  
  retries: {
    runMode: 1,
    openMode: 0
  },




    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Pricing Tests',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },




  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    env:{
      db: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'cypress'
    }
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber())
      require('cypress-mochawesome-reporter/plugin')(on);
      mysql.configurePlugin(on);
    },
    baseUrl: "https://demoqa.com/",
    specPattern:"cypress/e2e/Features/*.feature"
  },
});

function queryTestDb(query, config){
  //create a new mysql connection using credentials from cypress. json env's
  const connection = mysql.createConnection(config.env.db);
  //start connection to db
  connection.connect();
  //exec query + disconnect to db as a promise
  return new Promise((resolve, reject)=>{
    connection.query(query, (error, result)=>{
      if(error) reject(error);
      else{
        connection.end();
        //console.log(results)
        return resolve(results);
      }
    })
  })
}
