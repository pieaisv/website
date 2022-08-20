describe("empty spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.intercept("GET", "/api/event/get", { events: [] });
    cy.intercept("POST", "/api/email/suscribe", {
      message: "success",
    });
    cy.get("#email").type(`${crypto.randomUUID()}@gmail.com`);
    cy.get("form").submit();
  });
});
