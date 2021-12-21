describe('Heading', () => {
    it('has the right title', () => {
        cy.visit('http://192.168.85.48:5000/example-1')

        cy.get('h1')
            .invoke('text')
            .should("equal", "My Awesome Web Application")
    });

});
