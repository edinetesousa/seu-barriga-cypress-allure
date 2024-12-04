import { cadastro } from '../support/commands';
let cadastroUsuario
describe('Cadastro de usuarios e validacao', () => {

  beforeEach('Acessar página de cadastro', () => {
    cy.visit('/cadastro');
    cy.title().should('eq', 'Seu Barriga - Novo Usuário');
    cadastroUsuario = cadastro();
  })
  context('Teste de Cadastro de Usuario e validacoes', () => {
    it('cadastro de usuario com sucesso', () => {
      cy.cadastroUsuario(cadastroUsuario);
      cy.validarCadastro('Usuário inserido com sucesso');
    })
  })
})