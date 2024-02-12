/// <reference types="cypress" />

describe('Case de testes - Desafio Klok', function () {

    const item = 'notebook'
    const itemComSeguro = 'iphone 13'
    const produtoInexistente = 'ProdutoInexistente'

    this.beforeEach(function () {
        cy.visit('https://www.magazineluiza.com.br/')
        cy.title().should('be.equal', 'Magazine Luiza | Pra você é Magalu!')
    })

    it('Caso 1 - Pesquisar o produto especificado e validar o retorno', function () {
        cy.SelecionaeDigitaNaBarraDeBusca(item)
        cy.get('.cQXUXR', {timeout: 5000}).should('contain', "Resultados para")
        cy.get('[data-testid="product-card-content"]').invoke('text').then((text) => {
            expect(text.trim().toLowerCase()).to.contain(item.toLowerCase());
          })    
    })

    it('Caso 2 - Pesquisar o produto especificado (sem seguro) e adicionar ao carrinho com sucesso', function () {

        cy.SelecionaeDigitaNaBarraDeBusca(item)
        cy.get('.cQXUXR', {timeout: 5000}).should('contain', "Resultados para")
        cy.get('[data-testid="product-card-content"]').invoke('text').then((text) => {
            expect(text.trim().toLowerCase()).to.contain(item.toLowerCase());
          })   
        cy.get(':nth-child(1) > [data-testid="product-card-container"]').click()       
        cy.get(':nth-child(2) > [data-testid="bagButton"]').click().wait(500)     
        cy.get('.BasketPriceBox-prices-title--normal').should('contain', '1 item')     
    })

    it('Caso 3 - Pesquisar o produto especificado (com seguro) e adicionar ao carrinho com sucesso', function () {

        cy.SelecionaeDigitaNaBarraDeBusca(itemComSeguro)
        cy.get('.cQXUXR', {timeout: 5000}).should('contain', "Resultados para")
        cy.get('[data-testid="product-card-content"]').invoke('text').then((text) => {
            expect(text.trim().toLowerCase()).to.contain(itemComSeguro.toLowerCase());
          })   
        cy.get(':nth-child(1) > [data-testid="product-card-container"]').click()       
        cy.get(':nth-child(2) > [data-testid="bagButton"]').click().wait(500)        
        cy.get('.reject-service-btn').click();     
        cy.get('.BasketPriceBox-prices-title--normal').should('contain', '1 item')     
    })


    it('Caso 4 - Pesquisar o produto inexistente ', function () {
        cy.SelecionaeDigitaNaBarraDeBusca(produtoInexistente)
        cy.get("[data-testid='search-submit']").click()
        cy.get('body').should('contain', `Sua busca por "${produtoInexistente.toLowerCase()}" não encontrou resultado algum`)
    })
})