///<reference types='cypress'/>

describe('Funcionalidade: Busca de Filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve buscar filme com sucesso', () => {
        const filme = 'Matrix';
        console.log('Buscando filme:', filme);
        cy.get('#search-input').type(filme);
        cy.get('#search-button').click();
        cy.get('#results-section').should('contain', filme);
    });

    it('Deve buscar filmes com sucesso de uma lista', () => {
        cy.fixture('filmes').then((filmes) => {
            const filme = filmes[1].titulo;
            console.log('Buscando filme da lista:', filme);
            cy.get('#search-input').type(filme);
            cy.get('#search-button').click();
            cy.get('#results-section').should('contain', filme);
        });
    });

    it('Deve buscar filmes com sucesso da lista inteira', () => {
        cy.fixture('filmes').then((filmes) => {
            filmes.forEach((filme) => {
                console.log('Buscando filme da lista inteira:', filme.titulo);
                cy.get('#search-input').clear().type(filme.titulo);
                cy.get('#search-button').click();
                cy.get('#results-section').should('contain', filme.titulo);
            });
        });
    });
});