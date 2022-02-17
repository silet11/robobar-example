import {Given} from "cypress-cucumber-preprocessor/steps";
import {Then} from "cypress-cucumber-preprocessor/steps";
import {When} from "cypress-cucumber-preprocessor/steps";
import {And} from "cypress-cucumber-preprocessor/steps";

Given('user opens robobar webside', () => {
    cy.visit('http://localhost:3000/')
})
//ADD ONE COLA
When('user adds a cola', () =>{
    cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn').click();

})
Then('total should be €{float}', (total) => {
    cy.get(':nth-child(4) > .ng-binding').should("contain.text", "€" + total)
})
//ADD TWO COLA
When('user add two cola', () =>{
    cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn').click();
})

//ADD ONE BEER
When('user adds a beer', () =>{
    cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn').click();
})

//ADD TWO BEER
When('user add two beer', () =>{
    cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn').click();
})

//ADD ONE WINE
When('user adds a wine', () =>{
    cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn').click();
})

//ADD TWO WINES
When('user add two wines', () =>{
    cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn').click();
})

//ADD UNDERAGE BEER
When('user press submit button', () =>{
    cy.get('.col-12 > .btn').click();
    cy.get('.btn-success').should("be.disabled");
})
And('user enter his age is 17',()=>{
    cy.get('#ageInput').should("be.enabled");
    cy.get('#ageInput').type("17");
    cy.get('.btn-success').click();
    cy.get('#ageInput').should("contain.value", "17");
})
And('user press order button',()=>{
    cy.get('.btn-success').click();

})
Then('alert is active', () => {
    cy.get('#ageInput').should("contain.value", "17");
    cy.get('.alert > .ng-binding').should("contain.text", "Only adults can buy alcohol!");
})

//ADULT BEER
/*And('user enter his age is 20',()=>{
    cy.get('#ageInput').should("be.enabled");
    cy.get('#ageInput').type("20");
    //cy.get('.btn-success').click();
})
Then('alert is not active', () => {
    cy.get('.alert > .ng-binding').should("be.disabled");
})

And ('order is confirmed', ()=>{
    cy.get('p').should("contain.text", "Coming right up! ~bzzzt~");

})*/
