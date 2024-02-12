Cypress.Commands.add('SelecionaeDigitaNaBarraDeBusca', function(item){
    cy.get('[data-testid="input-search"]')          
    .should('have.value', '')
    .click()
    .type(item)

    cy.get('[data-testid="input-search"]')           
    .should('have.value', item)

    cy.get("[data-testid='search-submit']")                                      
    .click()
})
