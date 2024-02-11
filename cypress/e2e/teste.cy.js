/// <reference types="cypress" />

describe('Case de testes - Desafio Klok', function(){

    const item = 'Notebook Dell'
    const produtoInexistente = 'ProdutoInexistente'

    this.beforeEach(function(){
        cy.visit('https://www.magazineluiza.com.br/')   //Acessa a página da magazine luiza
    })

    /// Este teste irá procurar um item descrito na constante item e adicioná=lo ao carrinho
    it('Validar item', function() {

        cy.SelecionaeDigitaNaBarraDeBusca(item)

        /// Seleciona o primeiro item da pesquisa
        cy.get(':nth-child(1) > [data-testid="product-card-container"]').click()

        ///Adiciona o item ao carrinho
        cy.get(':nth-child(2) > [data-testid="bagButton"]').click()

        ///Rejeita o seguro oferecido
        cy.get('.reject-service-btn').click()
        .wait(1000)
    })
    
    /// Este teste irá procurar um produco que não existe
    it('Caso 2 - Produto Inexistente', function(){

        cy.SelecionaeDigitaNaBarraDeBusca(produtoInexistente)
    
        cy.get("[data-testid='search-submit']").click()
        cy.get('body').should('contain', `Sua busca por "${produtoInexistente.toLowerCase()}" não encontrou resultado algum`)
        })

})



