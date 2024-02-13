
const el = require('./elements').ELEMENTS;

class Pesquisa {

    /// Valida se foram encontrados resultados para o produto pesquisado
    validarProdutoEncontrado() {
        cy.get('body', { timeout: 6000 }).should('contain', "Resultados para")
        cy.get('body', { timeout: 6000 }).should('contain', "produtos encontrados")
    }

    /// Adiciona o primeiro item encontrado e adiciona ao carrinho
    adicionarAoCarrinho() {
        cy.get(el.primeiroItemDaPesquisa).click()
        cy.get(el.botaoCarrinho).click()
    }

    /// Valida que a barra de pesquisa está vazia e então digita o nome do item que foi passado como argumento
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

    /// Valida que o item inexistente não foi encontrado
    validarProdutoNaoEncontrado(produtoInexistente){
        cy.get('body').should('contain', `Sua busca por "${produtoInexistente.toLowerCase()}" não encontrou resultado algum`)
    }

    /// Verifica que o carrinho possui um item após adicionar o produto
    validarCarrinho(){
        cy.get('.BasketPriceBox-prices-title--normal').should('contain', '1 item')
    }
}


export default new Pesquisa();