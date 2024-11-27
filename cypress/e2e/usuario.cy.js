describe('usuario', () => {
  it('cadastro de usuario', () => {
    cy.acessarPagina();
    cy.cadastroUsuario()
  })
})