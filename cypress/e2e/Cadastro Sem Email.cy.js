///<reference types='cypress'/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer cadastro sem email e retornar como erro', () => {
    cy.visit('/')
    cy.get('#signup-firstname').type('Leo')
    cy.get('#signup-lastname').type('Lopes')
    cy.get('#signup-phone').type('11122223333')
    cy.get('#signup-password').type('Teste!123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain','E-mail não pode estar vazio')
  })
})