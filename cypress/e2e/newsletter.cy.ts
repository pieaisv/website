describe("empty spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("#email").type("nelson@gmail.com");
    cy.get("form").submit();
  });
});
