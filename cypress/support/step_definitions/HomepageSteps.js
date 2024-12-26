import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import "../commands.js"
import HomePage from "../../support/PageObjects/HomePage.js"


Given('I am on the home page',()=>{

    HomePage.visitHomePage()

})