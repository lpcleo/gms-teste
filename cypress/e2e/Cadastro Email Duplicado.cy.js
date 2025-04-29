///<reference types='cypress'/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer cadastro com email duplicado e retornar como erro', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Leo')
    cy.get('#signup-lastname').type('Lopes')
    cy.get('#signup-email').type('Teste1@teste.com')
    cy.get('#signup-phone').type('11122223333')
    cy.get('#signup-password').type('Teste!123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain','Este email já está cadastrado.')
  })
})