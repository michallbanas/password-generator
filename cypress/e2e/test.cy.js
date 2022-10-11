/// <reference types="Cypress" />

beforeEach(function(){
    cy.visit("index.html") 
}) 

describe("Test Password Generator", () => {
    it("Či vypíše heslo", () => {
        cy.get("input#lenght")
            .clear()
            .type(24) 
        cy.get("button#btn")
            .should("be.visible")
            .should("have.text", "Generovať heslo")
            .click()
        cy.get("input#result")
            .should("not.have.value","")
    })
    it("Či vypíše heslo, ak je číslo <12", () => {
        cy.get("input#lenght")
            .clear()
        cy.get("button#btn")
            .click()
        cy.get("input#result")
            .should("have.value","")
    })
    it("Či skopíruje heslo", () => {
        
        cy.get("input#lenght")
        cy.get("button#btn")
            .click()
        cy.get("#icon")
            .click({force: true})

       
        // get password from input and check if it is copied
                    
        cy.get("input#result").invoke("attr", "value").as("password")

        cy.get("@password").then((password) => {
            cy.log(password)
            cy.window().its('navigator.clipboard').invoke('readText').should('eq', password )
        })
    })
})
