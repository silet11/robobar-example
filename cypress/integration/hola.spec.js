// hola.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
function colaButton(numColas) {
    for (var x = 0; x < numColas; x++) {
        cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn').click();
    }
}

function beerButton(numBeers) {
    for (var x = 0; x < numBeers; x++) {
        cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn').click();
    }
}

function wineButton(numWines) {
    for (var x = 0; x < numWines; x++) {
        cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn').click();
    }
}

function totalText() {
    return cy.get(':nth-child(4) > .ng-binding')
}

function orderText() {
    return cy.get('.col-12 > .btn').click();

}

function submitOrder() {
    return cy.get('.btn-success').should("contain.text", "Order").click();
}

describe('Hello Cypress', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it('Says hello', () => {
        expect(true).to.equal(true)
        //expect(true).to.equal(true) error
    })
    it('Order a cola', () => {
        colaButton(1)
        totalText()
            .should("contain.text", "€1.25")
        orderText();
        submitOrder();
        cy.get('p').should("contain.text", "Coming right up! ~bzzzt~");
    })
    it('Underage a beer', () => {
        beerButton(1)
        totalText()
            .should("contain.text", "€2.00")
        orderText();
        cy.get('.btn-success').should("be.disabled");
        cy.get('#ageInput').should("be.enabled");
        cy.get('#ageInput').type("17");
        cy.get('.btn-success').click();
        cy.get('#ageInput').should("contain.value", "17");
        cy.get('.alert > .ng-binding').should("contain.text", "Only adults can buy alcohol!");

    })
    it('Adult beer', () => {
        beerButton(1)
        totalText()
            .should("contain.text", "€2.00")
        orderText();
        cy.get('.btn-success').should("be.disabled");
        cy.get('#ageInput').should("be.enabled");
        cy.get('#ageInput').type("19");
        cy.get('.btn-success').click();
        cy.get('p').should("contain.text", "Coming right up! ~bzzzt~");
    })
    it('Order two cola', () => {
        colaButton(2)
        totalText()
            .should("contain.text", "€2.50")
    })
    it('Order a beer', () => {
        beerButton(1)
        totalText()
            .should("contain.text", "€2.00")
    })
    it('Order two beer', () => {
        beerButton(2)
        totalText()
            .should("contain.text", "€4.00")
    })
    it('Order a wine', () => {
        wineButton(1)
        totalText()
            .should("contain.text", "€3.00")
    })
    it('Order two wine', () => {
        wineButton(2)
        totalText()
            .should("contain.text", "€6.00")
    })
})