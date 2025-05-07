///<reference types='cypress'/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach( () => {
    cy.visit('/')
  });

  afterEach(() => {
    cy.screenshot()
    
});

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `leo${Date.now()}@test.com`
    cy.preenchercadastro('Leo', 'Lopes', email, '11222223333', 'Teste!123')
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso')
  })

  it.only('deve validar mensagem de erro com o campo nome invalido', () => {
    cy.preenchercadastro('Leo20', 'Lopes', 'teste@test.com', '11222223333', 'Teste!123')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
  });
})

