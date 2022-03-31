describe('Note app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3002/api/testing/reset')
    const user = {
      name: 'Matti Luukkainen',
      username: 'mluukkai',
      password: 'salainen'
    }
    cy.request('POST', 'http://localhost:3002/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('user can log in', function() {
    cy.contains('log in').click()
    cy.get('#username').type('mluukkai')
    cy.get('#password').type('salainen')
    cy.get('#login-button').click()

    cy.contains('Matti Luukkainen logged in')
  })

  it('login fails with wrong password', function() {
    cy.contains('log in').click()
    cy.get('#username').type('mluukkai')
    cy.get('#password').type('wrong')
    cy.get('#login-button').click()

    cy.get('.error')
      .should('contain', 'wrong credentials')
      .and('have.css', 'color', 'rgb(255, 0, 0)')
      .and('have.css', 'border-style', 'solid')

    cy.get('html').should('not.contain', 'Matti Luukkainen logged in')
  })

  describe('when logged in', function() {
    beforeEach(function() {
      cy.login({ username: 'mluukkai', password: 'salainen' })
    })
    it('a new note can be created', function() {
      cy.contains('new note').click()
      cy.get('input').type('a note created by cypress')
      cy.contains('save').click()
      cy.contains('a note created by cypress')
    })

    describe('and a note exists', function () {
      beforeEach(function () {
        cy.createNote({
          content: 'another note cypress',
          important: false
        })
      })

      it('it can be made important', function () {
        cy.contains('another note cypress').parent().find('button').click()

        cy.contains('another note cypress').parent().find('button').should('contain', 'make not important')
      })
    })

    describe('and several notes exist', function () {
      beforeEach(function () {
        cy.createNote({ content: 'first note', important: false })
        cy.createNote({ content: 'second note', important: false })
        cy.createNote({ content: 'third note', important: false })
      })

      it('one of those can be made important', function () {
        cy.contains('second note').parent().find('button').as('theButton')
        cy.get('@theButton').click()
        cy.get('@theButton').should('contain', 'make not important')
      })
    })
  })
})