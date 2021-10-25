describe('User Movie Flows', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'movies.json'})
    .visit('http://localhost:3000')
  });

  it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/')
  });

  it('should be able to see a carousel', () => {
    cy.get('.slide-title')
      .contains('King of Staten Island')
  });

  it('should be able to see all movies on page load', () => {
    cy.get('img').should('be.visible')
    cy.get('.movies-container').should('have.length', 1)
  });

  it('should be able to see all movie ratings on page load', () => {
    cy.get('.movie-rating').should('be.visible')
  });

  it('should be able to see a slider displaying three movies on rotation', () => {
    cy.get('.movie-slider').should('be.visible')
  });

  it('should display movie details when a movie card is clicked', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/659986', { fixture: 'individual-movie.json' })
    .get('.movie-card').first().click()
    .url().should('include', '/movies/659986')
  })
})
