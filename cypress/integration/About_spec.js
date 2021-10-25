describe('User About Page Flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about')
  });

  it('should still see the navbar', () => {
    cy.get('.nav-bar').should('be.visible')
    .get('.title').should('contain', 'RUDY & JOHNSON')
    .get('.about-link').should('be.visible')
    .get('.navBar-p').should('contain', 'Your source for credible cinema reviews')
    .get('.search-form').should('be.visible')
  });

  it('should show two bios', () => {
    cy.get('.rudy-section').should('be.visible')
    .get('h3').should('be.visible')
    .get('.rudy-photo').should('be.visible')
    .get('.rudy-bio').should('be.visible')
    .get('.johnson-section').should('be.visible')
    .get('h3').should('be.visible')
    .get('.johnson-photo').should('be.visible')
    .get('.johnson-bio').should('be.visible')
  });
})
