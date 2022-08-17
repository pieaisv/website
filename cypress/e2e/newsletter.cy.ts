describe("empty spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.intercept("GET", "/api/event/get", { events: [] });
    const uuid = () => Cypress._.random(0, 1e6);
    const id = uuid();
    cy.intercept("POST", "/api/email/suscribe", {
      message: "success",
    });
    cy.get("#email").type(`${id}@gmail.com`);
    cy.get("form").submit();
  });
});
