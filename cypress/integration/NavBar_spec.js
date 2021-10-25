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

  it('should get an error message if user searches for movie not in directory', () => {
    cy.get('input[placeholder="Start your search here."]')
    cy.get('input')
      .type('jliajdlj').should('have.value', 'jliajdlj')
      .get('.searchBtn')
      .click().get('h2').should('be.visible')
  })
})