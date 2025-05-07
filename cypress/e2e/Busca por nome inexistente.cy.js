/// <reference types='cypress'/>

describe('Funcionalidade: Busca de Filmes', () => {
  it('Deve verificar toda a lista de filmes e retornar como erro', () => {
      cy.visit('/')
      cy.get('#search-input').type('s1fd1cdop')
      cy.get('#search-button').click()
      cy.get('#results-section > p').should('contain', 'Filme não encontrado.')
  })
})