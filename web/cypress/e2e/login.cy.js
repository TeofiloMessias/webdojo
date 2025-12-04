// describe agrupa varios testes, e o IT é o caso de teste, e podemos ter varios IT's ou vaios casos de testes
describe('Login', () => {
  it('Deve logar com sucesso', () => {
    cy.iniciar()
    cy.submeterLogin('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
  })
  it('Nao deve logar com senha inválida', () => {
    cy.iniciar()
    cy.submeterLogin('papito@webdojo.com', 'katana1123')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })
  it('Nao deve logar com email não cadastrado', () => {
    cy.iniciar()
    cy.submeterLogin('404@webdojo.com', 'katana123')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })
})

