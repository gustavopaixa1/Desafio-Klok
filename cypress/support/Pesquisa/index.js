
const el = require('./elements').ELEMENTS;

class Pesquisa {
    validarProdutoEncontrado() {
        cy.get('body', { timeout: 6000 }).should('contain', "Resultados para")
        cy.get('body', { timeout: 6000 }).should('contain', "produtos encontrados")

    }

    adicionarAoCarrinho() {
        cy.get(el.primeiroItemDaPesquisa).click()
        cy.get(el.botaoCarrinho).click()
    }

    pesquisarItemNaBarraDePesquisa(item) {
        cy.get(el.barraDePesquisa)
            .should('have.value', '')
            .click()
            .type(item)

        cy.get(el.barraDePesquisa)
            .should('have.value', item)

        cy.get(el.botaoPesquisa)
            .click()
    }

    validarProdutoNaoEncontrado(produtoInexistente){
        cy.get('body').should('contain', `Sua busca por "${produtoInexistente.toLowerCase()}" não encontrou resultado algum`)
    }

    recusarSeguro(){
        cy.get(el.botaoSelecionarUmSeguro).click()
        cy.get(el.botaoRecusarSeguro).click()
    }

    validarCarrinho(){
        cy.get('.BasketPriceBox-prices-title--normal').should('contain', '1 item')
    }
}


export default new Pesquisa();