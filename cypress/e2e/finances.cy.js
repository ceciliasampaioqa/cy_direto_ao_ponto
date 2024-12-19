describe('Transações', () => {

    beforeEach(() => {
        cy.visit('https://dev-finance.netlify.app/#')
        
    });

    it('Cadastrar uma entrada', () => {
        cy.criarTransacao('Salario', 5500)
        
        cy.get("tbody tr td.description").should('have.text', 'Salario')  
    });

    it('Cadastrar uma saída', () => {
        cy.criarTransacao('Ceia de Natal',-250)

        cy.get("tbody tr td.description").should('have.text', 'Ceia de Natal')  
        
    });

    it('Excluir transação', () => {
        cy.criarTransacao('Salario', 1000)
        cy.criarTransacao('Caju', 700)

        cy.contains('.description', 'Salario') //td -> é a referência
            .parent() //tr -> é a linha
            .find('img') // elemento que a gente precisa
            .click()
        cy.get('tbody tr').should('have.length', 1)
    });
});

