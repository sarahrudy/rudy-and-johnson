describe('Individual Movie Details Flows', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/movies/659986')
  })

  it("When user clicks on a movie card the app should navigate to the movie's details", () => {
    cy.intercept('GET', 'movies/659986', {
      statusCode: 201,
      body: {
        id: 659986,
        title: "The Owners",
        poster_path:
          "https://image.tmdb.org/t/p/original//gzFatNrw0lhKD5NxaU6zC7S2KjP.jpg",
        backdrop_path:
          "https://image.tmdb.org/t/p/original//xUUtcxWC6H48UCrpRwwSPQz69XC.jpg",
        release_date: '2020-09-04',
        overview:
          "A group of friends think they found the perfect easy score - an empty house with a safe full of cash. But when the elderly couple that lives there comes home early, the tables are suddenly turned. As a deadly game of cat and mouse ensues, the would-be thieves must fight to save themselves from a nightmare they could never have imagined.",
        genres: ["Thriller", "Horror", "Action"],
        budget: 0,
        revenue: 0,
        runtime: 92,
        tagline: '',
        average_rating: 5.285714285714286,
      },
    });
    cy.get('h1')
      .contains('RUDY & JOHNSON')
      .get('.movie-details-container')
      .should('be.visible')
      .get('.movie-details__title')
      .contains('The Owners')
      .get('.movie-details__overview')
      .contains("A group of friends think they found the perfect easy score - an empty house with a safe full of cash. But when the elderly couple that lives there comes home early, the tables are suddenly turned. As a deadly game of cat and mouse ensues, the would-be thieves must fight to save themselves from a nightmare they could never have imagined.")
    })

    it('Should be able to click the header of page and be taken back to the home page', () => {
      cy.visit('http://localhost:3000/movies/659986');
      cy.get('.title').should('exist')
        .click()
        .url().should('not.include', 'movies');
    })

    it('Should be able to click the back button and be taken back to the home page', () => {
      cy.visit('http://localhost:3000/movies/659986');
      cy.get('.movie-details__back-btn').should('exist')
        .click()
        .url().should('not.include', 'movies')
        .url().should('eq', 'http://localhost:3000/')
    });
    
    // it('should get error if user searches for a movie not in directory', () => {
    //   cy.visit('')
    // })
  })


  
  
