///<reference types='cypress'/>

describe('Funcionalidade: Recomendações do Dia', () => {
  it('a', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#recommendations-section')
      .should('be.visible')
      .within(() => {
        // 2. Verifica o título da seção
        cy.contains('h2', 'RECOMENDAÇÕES DO DIA')
          .should('be.visible');

        // 3. Verifica se existe pelo menos uma recomendação
        cy.get('#recommendations > div')
          .should('have.length.gte', 1)
          .each(($filme) => {
            // 4. Verifica a capa do filme
            cy.wrap($filme)
              .find('img')
              .should('be.visible')
              .and(($img) => {
                // Verifica se a imagem está carregada corretamente
                expect($img[0].naturalWidth).to.be.greaterThan(0);
                expect($img[0].naturalHeight).to.be.greaterThan(0);
                // Verifica se tem texto alternativo
                expect($img[0].alt).not.to.be.empty;
              });

            // 5. Verifica o título do filme
            cy.wrap($filme)
              .find('p')
              .should('be.visible')
              .and(($p) => {
                // Verifica se o título não está vazio
                expect($p.text().trim()).not.to.be.empty;
              });
          });
      });
  });
});