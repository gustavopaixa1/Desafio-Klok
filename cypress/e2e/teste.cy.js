/// <reference types="cypress" />

describe('Case de testes - Desafio Klok', function () {

    const item = 'Iphone 13'
    const itemURL = 'iphone+13'
    const produtoInexistente = 'ProdutoInexistente'

    this.beforeEach(function () {
        cy.visit('https://www.magazineluiza.com.br/')
    })

    it('Caso 1 - Pesquisar o produto especificado e validar o retorno', function () {
        cy.SelecionaeDigitaNaBarraDeBusca(item)
        cy.get('.cQXUXR').should('contain', "Resultados para")

        cy.request({
            method: 'GET',
            url: `https://www.magazineluiza.com.br/busca/${itemURL}/`
        }).then((response) => {
            const { status, statusText, body } = response
            expect(status).to.be.equal(200)
            expect(statusText).to.be.equal('OK')
        })

    })

    it('Caso 2 - Pesquisar o produto especificado e adicionar ao carrinho com sucesso', function () {

        cy.SelecionaeDigitaNaBarraDeBusca(item)
        cy.get(':nth-child(1) > [data-testid="product-card-container"]').click()        /// Seleciona o primeiro item da pesquisa
        cy.get(':nth-child(2) > [data-testid="bagButton"]').click().wait(500)         ///Adiciona o item ao carrinho
        cy.get('.reject-service-btn').click();        ///Rejeita o seguro oferecido pelo site (se houver)
        cy.get('.BasketPriceBox-prices-title--normal').should('contain', '1 item')        // Verifica que tem 1 item no carrinho
    })


    it('Caso 3 - Pesquisar o produto inexistente ', function () {

        cy.SelecionaeDigitaNaBarraDeBusca(produtoInexistente)
        cy.get("[data-testid='search-submit']").click()
        cy.get('body').should('contain', `Sua busca por "${produtoInexistente.toLowerCase()}" não encontrou resultado algum`)

        cy.request({
            method: 'GET',
            url: `https://www.magazineluiza.com.br/busca/${produtoInexistente}/`
        }).then((response) => {
            const { status, statusText, body } = response
            expect(status).to.be.equal(200)
            expect(statusText).to.be.equal('OK')
        })
    })
})