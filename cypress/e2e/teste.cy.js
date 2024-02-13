/// <reference types="cypress" />

import Pesquisa from "../support/Pesquisa"

describe('Case de testes - Desafio Klok', function () {

    const item = 'caneta'
    const itemComSeguro = 'playstation 5'
    const produtoInexistente = 'ProdutoInexistente'

    this.beforeEach(function () {
        cy.visit('https://www.magazineluiza.com.br/')
        cy.title().should('be.equal', 'Magazine Luiza | Pra você é Magalu!')
    })


    it.only('Caso 1 - Pesquisar o produto especificado e validar o retorno', function () {
        Pesquisa.pesquisarItemNaBarraDePesquisa(item)
        
        Pesquisa.validarProdutoEncontrado()
    })

    it('Caso 2 - Pesquisar o produto especificado (sem seguro) e adicionar ao carrinho com sucesso', function () {
        Pesquisa.pesquisarItemNaBarraDePesquisa(item)

        Pesquisa.validarProdutoEncontrado()

        Pesquisa.adicionarAoCarrinho()
        
        Pesquisa.validarCarrinho()
    })

    it('Caso 3 - Pesquisar o produto especificado (com seguro) e adicionar ao carrinho com sucesso', function () {
        Pesquisa.pesquisarItemNaBarraDePesquisa(itemComSeguro)

        Pesquisa.validarProdutoEncontrado()

        Pesquisa.adicionarAoCarrinho()
        
        Pesquisa.recusarSeguro()

        Pesquisa.validarCarrinho()

    })

    it('Caso 4 - Pesquisar o produto inexistente ', function () {
        Pesquisa.pesquisarItemNaBarraDePesquisa(produtoInexistente)
        
        Pesquisa.validarProdutoNaoEncontrado(produtoInexistente)
    })
})