describe('Formulario de Consultoria', () => {

    it('Deve solicitar consultoria individual', ()=>{
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')
        cy.get('#name').type('Fernando Papito')
        cy.get('#email').type('papito@webdojo.com')
        cy.get('#phone').type('11987351806')


    })
})


   