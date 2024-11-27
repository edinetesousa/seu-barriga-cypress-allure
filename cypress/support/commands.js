Cypress.Commands.add('acessarPagina', (acessarPagina) => {
    cy.visit('https://seubarriga.wcaquino.me/cadastro');
})
Cypress.Commands.add('cadastroUsuario', () => {
    cy.get('#nome').type('SAndro Augusto');
    cy.get('#email').type('sandroguto@gmail.com');
    cy.get('#senha').type('123456')
    cy.contains('Cadastrar').click();
})
