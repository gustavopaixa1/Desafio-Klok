Cypress.Commands.add('SelecionaeDigitaNaBarraDeBusca', function(item){
    //Acessa o campo de pesquisa e verifica se o valor do campo está vazio, digita o valor dado nos parametros
    cy.get('[data-testid="input-search"]')          
    .should('have.value', '')
    .click()
    .type(item)

    //Verifica se o campo de busca está com o valor que foi digitado
    cy.get('[data-testid="input-search"]')           
    .should('have.value', item)

     // Clica na lupa para pesquisar 
    cy.get("[data-testid='search-submit']")                                      
    .click()
    .wait(1000)
})