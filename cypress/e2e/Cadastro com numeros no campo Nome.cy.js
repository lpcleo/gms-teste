///<reference types='cypress'/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro com numeros no campo Nome e retornara como erro', () => {
    cy.visit('/')
    cy.get('#signup-firstname').type('Leo123')
    cy.get('#signup-lastname').type('Lopes')
    cy.get('#signup-email').type('Teste4@teste.com')
    cy.get('#signup-phone').type('11122223333')
    cy.get('#signup-password').type('Teste!123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain','Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })
})
