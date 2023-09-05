describe("Error messages", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("error message when result is empty", () => {
    cy.log("Click on copy button")
    cy.get("#copyBtnDiv").click()

    cy.log("Result should show error message")
    cy.get("#result").should("have.value", "You can't copy empty value")

    cy.log("Generate button should be disabled")
    cy.get("#generateBtn").should("be.disabled")
  })
})
