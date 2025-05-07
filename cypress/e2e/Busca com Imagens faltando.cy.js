/// <reference types='cypress'/>

describe('Funcionalidade: Busca de Filmes', () => {
  it('Deve verificar toda a lista de filmes e retornar como erro', () => {
      cy.visit('/')
      cy.get('#search-input').type('Inception')
      cy.get('#search-button').click()
      cy.get('#results-section').should('exist')
      cy.get('#results-section > div').each(($filme) => {
          cy.wrap($filme).find('h3').should('exist')       
          cy.wrap($filme).find('img').should('exist')     
          cy.wrap($filme).find('img').should(($img) => {
              expect($img[0].naturalWidth).to.be.greaterThan(0)
              expect($img[0].naturalHeight).to.be.greaterThan(0)
          })
      })
  })
})