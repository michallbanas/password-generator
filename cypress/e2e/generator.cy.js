describe("Test basic functionality", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("all the elements should be visible", () => {
    cy.log("H1 should be visible and have the correct text")
    cy.get("h1").should("be.visible").and("have.text", "Password Generator")

    cy.log("Description paragraph should be visible and have the correct text")
    cy.get("[data-test='description']")
      .should("be.visible")
      .and("have.text", "This generator is only for testing purpose.")

    cy.log(
      "Number of characters label and input should be visible and have the correct text and values",
    )
    cy.contains("label", "number of characters").should("be.visible")
    cy.get("#length")
      .should("be.visible")
      .and("have.value", "16")
      .and("have.prop", "min", "8")
      .and("have.prop", "max", "24")

    cy.log("Generate button should be visible and have the correct text")
    cy.contains("#generateBtn", "Get Password").should("be.visible")

    cy.log("Result input should be visible and have the correct placeholder")
    cy.get("#result")
      .should("be.visible")
      .and("have.prop", "placeholder", "You'll see the password here.")

    cy.log("Copy button should be visible")
    cy.get("#copyBtnDiv").should("be.visible")
  })
})
