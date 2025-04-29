/// <reference types='cypress'/>

describe('Funcionalidade: Busca de Filmes', () => {
  it('Deve limpar todos os filme que retornaram.', () => {
      cy.visit('http://127.0.0.1:8080/')
      cy.get('#search-input').type('The Matrix')
      cy.get('#search-button').click()
      cy.get('#clear-button').click()

    })
   })