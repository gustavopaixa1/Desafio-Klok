/// <reference types="cypress" />

import Pesquisa from "../support/Pesquisa"

describe('Case de testes - Desafio Klok', function () {

    const itemSemSeguro = 'caneta'
    const itemNomeIncompleto = 'iphone'
    const itemNomeCompleto = 'Apple iPhone 13 128GB Estelar Tela 6,1” 12MP'
    const itemComSeguro = 'iphone 13'
    const produtoInexistente = 'ProdutoInexistente'

    this.beforeEach(function () {
        cy.visit('https://www.magazineluiza.com.br/')
        cy.title().should('be.equal', 'Magazine Luiza | Pra você é Magalu!')
    })


    it('Caso 1 - Pesquisar o produto especificado e validar o retorno', function () {
        Pesquisa.pesquisarItemNaBarraDePesquisa(itemNomeIncompleto)
        
        Pesquisa.validarProdutoEncontrado()
    })

    
    it('Caso 2 - Pesquisar o produto pelo nome completo e validar o retorno', function () {
        Pesquisa.pesquisarItemNaBarraDePesquisa(itemNomeCompleto)
        
        Pesquisa.validarProdutoEncontrado()
    })

    it('Caso 3 - Pesquisar o produto inexistente ', function () {
        Pesquisa.pesquisarItemNaBarraDePesquisa(produtoInexistente)
        
        Pesquisa.validarProdutoNaoEncontrado(produtoInexistente)
    })

    it('Caso 4 - Pesquisar o produto especificado (sem seguro) e adicionar ao carrinho com sucesso', function () {
        Pesquisa.pesquisarItemNaBarraDePesquisa(itemSemSeguro)

        Pesquisa.validarProdutoEncontrado()

        Pesquisa.adicionarAoCarrinho()
        
        Pesquisa.validarCarrinho()
    })

    it('Caso 5 - Pesquisar o produto especificado (com seguro) e adicionar ao carrinho com sucesso', function () {
        Pesquisa.pesquisarItemNaBarraDePesquisa(itemComSeguro)

        Pesquisa.validarProdutoEncontrado()

        Pesquisa.adicionarAoCarrinho()
        
        Pesquisa.recusarSeguro()

        Pesquisa.validarCarrinho()

    })
})