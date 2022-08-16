describe("empty spec", () => {
  it("passes", () => {
    cy.visit("/");
    const uuid = () => Cypress._.random(0, 1e6);
    const id = uuid();
    cy.get("#email").type(`${id}@gmail.com`);
    cy.get("form").submit();
  });
});
