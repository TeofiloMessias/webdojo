describe('Formulario de consultoria', () => {
    it('Deve solicitar consultototia individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')

        cy.get('#name').type('Fernando Papito')
        cy.get('#email').type('papito@webdojo.com')
        cy.get('input[placeholder="(00) 00000-0000"]').type('11954351847')
            .should('have.value','(11) 99999-1000')
    })
})

