// Describe the test suite for the home page
describe('Jungle App - Home Page', () => {
  // Test case: Visiting the home page
  it('should visit the home page', () => {
    // Visit the URL of the Jungle App home page
    cy.visit('http://localhost:3000/');

    // Assert that the page title contains "Jungle App"
    cy.title().should('contain', 'Jungle');
  });

  it("There is products on the page", () => {
    cy.get(".products article").should("be.visible");
  });

  it("There is 12 products on the page", () => {
    cy.get(".products article").should("have.length", 12);
  });

});