describe('Formulario de Consultoria', () => {

    it('Deve solicitar consultoria individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')
        cy.get('#name').type('Fernando Papito')
        cy.get('input[placeholder="Digite seu email"]').type('papito@webdojo.com')
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('(11) 98735-1806')
            .should('have.value', '(11) 98735-1806')

        // cy.get('#consultancyType').select('In Company')
        // //label[text()="Tipo de Consultoria"]/..//select
        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select('Individual')

        //  //span[text()="Pessoa Física"]/..//input
        cy.contains('span', 'Pessoa Física')
            .parent()
            .find('input')
            .check()
        //  .shoud('be.ckeck')       


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
        discoveryChannels.forEach((channel) => {
            cy.contains('label', channel)
                .find('input')
                .check()
                .should('be.checked')
        })

    })
})