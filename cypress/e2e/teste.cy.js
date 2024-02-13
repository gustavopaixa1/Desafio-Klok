/// <reference types="cypress" />

describe('Case de testes - Desafio Klok', function () {

    const item = 'caneta'
    const itemComSeguro = 'iphone 13'
    const produtoInexistente = 'ProdutoInexistente'

    this.beforeEach(function () {
        cy.visit('https://www.magazineluiza.com.br/')
        cy.title().should('be.equal', 'Magazine Luiza | Pra você é Magalu!')
    })


        it('Caso 1 - Pesquisar o produto especificado e validar o retorno', function () {
            /// Seleciona a barra de pesquisa e digita o valor da variável "item"
            cy.SelecionaeDigitaNaBarraDeBusca(item)

            /// Valida que a pesquisa retornou resultados
            cy.get('.cQXUXR', { timeout: 6000 }).should('contain', "Resultados para")

            /// Analisa os resultados para verificar que o item pesquisado está incluso
            cy.get('[data-testid="product-card-content"]').invoke('text').then((text) => {
                expect(text.trim().toLowerCase()).to.contain(item.toLowerCase())
            })
        })

        it('Caso 2 - Pesquisar o produto especificado (sem seguro) e adicionar ao carrinho com sucesso', function () {
            /// Seleciona a barra de pesquisa e digita o valor da variável "item"
            cy.SelecionaeDigitaNaBarraDeBusca(item)

            /// Valida que a pesquisa retornou resultados
            cy.get('.cQXUXR', { timeout: 6000 }).should('contain', "Resultados para")

            /// Analisa os resultados para verificar que o item pesquisado está incluso
            cy.get('[data-testid="product-card-content"]').invoke('text').then((text) => {
                expect(text.trim().toLowerCase()).to.contain(item.toLowerCase())
              })   
              
            /// Clica no primeiro elemento, adiciona ao carrinho e verifica que há um item no carrinho
            cy.get(':nth-child(1) > [data-testid="product-card-container"]').click()
            cy.get(':nth-child(2) > [data-testid="bagButton"]').click()
            cy.get('.BasketPriceBox-prices-title--normal').should('contain', '1 item')
        })

        it.only('Caso 3 - Pesquisar o produto especificado (com seguro) e adicionar ao carrinho com sucesso', function () {

            /// Seleciona a barra de pesquisa e digita o valor da variável "itemComSeguro"
            cy.SelecionaeDigitaNaBarraDeBusca(itemComSeguro)

             /// Analisa os resultados para verificar que o item pesquisado está incluso
            cy.get('.cQXUXR', { timeout: 6000 }).should('contain', "Resultados para")
            cy.get('[data-testid="product-card-content"]').invoke('text').then((text) => {
                expect(text.trim().toLowerCase()).to.contain(itemComSeguro.toLowerCase());
            })

            /// Clica no item, adiciona ao carrinho, recusa o seguro e verifica que há um item no carrinho
            cy.get(':nth-child(1) > [data-testid="product-card-container"]').click()
            cy.get(':nth-child(2) > [data-testid="bagButton"]').click()
            cy.get('.reject-service-btn', {timeout: 6000}).click()
            cy.get('.BasketPriceBox-prices-title--normal').should('contain', '1 item')
        })

        it('Caso 4 - Pesquisar o produto inexistente ', function () {
            /// Seleciona a barra de pesquisa e digita o valor da variável "produtoInexistente"
            cy.SelecionaeDigitaNaBarraDeBusca(produtoInexistente)
            
            /// Faz uma asserção de que o produto procurado não foi encontrado
            cy.get('body').should('contain', `Sua busca por "${produtoInexistente.toLowerCase()}" não encontrou resultado algum`)
        })
    })