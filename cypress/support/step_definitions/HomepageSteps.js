import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import "../commands.js"


Given('I am on the home page',()=>{

    cy.visit('https://demoqa.com/')
})