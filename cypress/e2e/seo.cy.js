describe("SEO tests", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Tittle and meta description are correct", () => {
    cy.log("Tittle is correct")
    cy.title().should("eq", "Password Generator")

    cy.log("Meta description is correct")
    cy.get("meta[name='description']").should(
      "have.attr",
      "content",
      "Password generator for testing purpose",
    )
  })
})
