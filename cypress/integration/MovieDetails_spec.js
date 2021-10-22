describe('Individual Movie Details Flows', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'individual-movie.json' })
      .visit('http://localhost:3000')
  })


})
