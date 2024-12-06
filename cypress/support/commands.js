const faker = require('faker-br');

export const cadastro = () => {
    return {
        nome: faker.name.findName(),       // Gerando nome aleatório
        email: faker.internet.email(),     // Gerando email aleatório
        senha: faker.internet.password()   // Gerando senha aleatória
    }
}

Cypress.Commands.add('cadastroUsuario', (cadastro) => {
if (cadastro.nome && cadastro.nome) {
    cy.get('#nome').type(cadastro.nome);
}
if (cadastro.email && cadastro.email) {
    cy.get('#email').type(cadastro.email);
}
if (cadastro.senha && cadastro.senha) {
    cy.get('#senha').type(cadastro.senha)
}
    cy.contains('Cadastrar').click();
})
Cypress.Commands.add('validarCadastro', (mensagem) => {
    cy.contains(mensagem).should('be.visible');
})
Cypress.Commands.add('validarEmail',  (mensagem) => {
    cy.get('#email')
      .invoke('prop', 'validationMessage').wait(5000)
      .should((text) => {
        expect(mensagem).to.eq(text)});
})

export const login = () => {
    return {
        email: faker.internet.email(),     // Gerando email aleatório
        senha: faker.internet.password()   // Gerando senha aleatória
    }
}
Cypress.Commands.add('login', (login) => {
    cy.get('#email').type(login.email);
    cy.get('#senha').type(login.senha)
    cy.contains('Entrar').click();
})
Cypress.Commands.add('validarLogin', (mensagem) => {
    cy.contains(mensagem).should('be.visible');
})