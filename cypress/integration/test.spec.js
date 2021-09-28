describe('Heading', () => {
    it('has the right title', () => {
        cy.visit('http://172.31.94.24:5000/example-1')

        cy.get('h1')
            .invoke('text')
            .should("equal", "My Awesome Web Application")
        cy.screenshot({capture : "runner"})
        cy.screenshot();
    });

});
