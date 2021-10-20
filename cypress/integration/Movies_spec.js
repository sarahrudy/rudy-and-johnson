describe('User Movie Flows', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'movies.json'})
    .visit('http://localhost:3000')
  });

  it('should be able to see all movies on page load', () => {
    cy.get('img').should('be.visible')
    cy.get('.movies-container').should('have.length', 1)
  });

  it('should be able to see all movie ratings on page load', () => {
    cy.get('.movie-rating').should('be.visible')
  });
})
