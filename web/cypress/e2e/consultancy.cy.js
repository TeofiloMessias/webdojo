describe('Formulario de consultoria', () => {
    it('Deve solicitar consultototia individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')

        cy.get('#name').type('Fernando Papito')
        cy.get('#email').type('papito@webdojo.com')
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('11 99999-1000')
            .should('have.value', '(11) 99999-1000')

        cy.get('#consultancyType').select('Individual')

        cy.contains('label', 'Pessoa Física')
            .find('input')
            .check()
            .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked')

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type('65602530070')
            .should('have.value', '656.025.300-70')

        const discoveryChannels = [
            'Instagram',
            'LinkedIn',
            'Udemy',
            'YouTube',
            'Indicação de Amigo'
        ]
        discoveryChannels.forEach((chanel) => {
            cy.contains('label', chanel)
                .find('input')
                .check()
                .should('be.checked')

        })


    })
})