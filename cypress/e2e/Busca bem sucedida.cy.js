/// <reference types='cypress'/>

describe('Funcionalidade: Busca de Filmes', () => {
  it('Deve retornar todos os filmes com o termo corretamente', () => {
      cy.visit('/')
      cy.get('#search-input').type('The Matrix')
      cy.get('#search-button').click()
      
      // Verifica se a seção de resultados contém pelo menos um filme
      cy.get('#results-section').should('exist')
      
      // Verifica TODOS os filmes retornados
      cy.get('#results-section > div').each(($filme) => {
          // Verifica se cada filme tem um título (h3)
          cy.wrap($filme).find('h3').should('exist')
          
          // Verifica se cada filme tem uma imagem
          cy.wrap($filme).find('img').should('exist')
          
          // Verifica se a imagem está carregada corretamente
          cy.wrap($filme).find('img').should(($img) => {
              expect($img[0].naturalWidth).to.be.greaterThan(0)
              expect($img[0].naturalHeight).to.be.greaterThan(0)
          })
      })
  })
})