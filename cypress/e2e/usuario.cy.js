import { cadastro } from '../support/commands';
let cadastroUsuario
describe('Cadastro de usuarios e validacao', () => {

  beforeEach('Acessar página de cadastro', () => {
    cy.visit('/cadastro');
    cy.title().should('eq', 'Seu Barriga - Novo Usuário');
    cadastroUsuario = cadastro();
  })
  context('Teste de Cadastro de Usuario e validacoes', () => {
    it('CT001 Cadastro de usuario com sucesso', () => {
      cy.cadastroUsuario(cadastroUsuario);
      cy.validarCadastro('Usuário inserido com sucesso');
    })
    it('CT002 Cadastro de usuario com dados inválidos', () => {
      cadastroUsuario.nome = 'Dora123';
      cadastroUsuario.email = 'dora#email';
      cadastroUsuario.senha = 'Teste123!@#';
      cy.cadastroUsuario(cadastroUsuario);
      cy.validarEmail('Inclua um "@" no endereço de e-mail. "dora#email" está com um "@" faltando.');
    })
    it('CT003 Cadastro de usuario com email já cadastrado', () => {
      cadastroUsuario.email = 'testadora123@outlook.com';
      cy.cadastroUsuario(cadastroUsuario);
      cy.validarCadastro('Endereço de email já utilizado');
    })
    it('CT004 Cadastro de usuario com caracteres especiais no campo nome', () => {
      cadastroUsuario.nome = 'Dora@#Teste!';
      cy.cadastroUsuario(cadastroUsuario);
      cy.validarCadastro('Nome deve conter apenas letras');
    })
    it('CT005 Cadastro de usuario apenas com numeros no campo nome e email ja cadastrado', () => {
      cadastroUsuario.nome = '123456';
      cadastroUsuario.email = 'doratesta935@gmail.com';
      cy.cadastroUsuario(cadastroUsuario);
      cy.validarCadastro('Nome deve conter apenas letras');
    })
    it('CT006 Cadastro de usuario apenas com numeros no campo nome e email nao cadastrado', () => {
      cadastroUsuario.email = 'doradora@gmail.com';
      cadastroUsuario.senha = 'Teste123!@#';
      cy.cadastroUsuario(cadastroUsuario);
      cy.validarCadastro('Nome deve conter apenas letras');
    })
    it('CT007 Cadastro de usuario com campo nome vazio', () => {
      cadastroUsuario.nome = '';
      cy.cadastroUsuario(cadastroUsuario);
      cy.validarCadastro('Nome é um campo obrigatório');
    })
    it('CT008 Cadastro de usuario com campo email contendo espaco em branco', () => {
      cadastroUsuario.email = 'dora @gmail.com';
      cy.cadastroUsuario(cadastroUsuario);
      cy.validarCadastro('Endereço de email inválido');
    })
    it('CT009 Cadastro de usuario com campo email vazio', () => {
      cadastroUsuario.email = '';
      cy.cadastroUsuario(cadastroUsuario);
      cy.validarCadastro('Email é um campo obrigatório');
    })
    it('CT010 Cadastro de usuario com campo senha vazio', () => {
      cadastroUsuario.senha = '';
      cy.cadastroUsuario(cadastroUsuario);
      cy.validarCadastro('Senha é um campo obrigatório');
    })
  })
})