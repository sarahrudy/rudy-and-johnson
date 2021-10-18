describe("NavBar display", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should be able to see name of app in nav bar', () => {
    cy.get('h1.title')
      .contains('RUDY & JOHNSON')  
  })

  it('should be able to see nav bar paragraph', () => {
    cy.get('.navBar-p')
      .contains('Your source for credible cinema reviews')
  })

  it('should be able to search movies from nav bar', () => {
    cy.get('input[placeholder="Start your search here."]')
    cy.get('input')
      .type('Mulan').should('have.value', 'Mulan')
  })
})