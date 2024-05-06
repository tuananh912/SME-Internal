
describe('Login', () => {
    
    it('Login', {defaultCommandTimeout: 5000},() => {
      cy.visit("/login")

      let username = "rm1@cimb.com" 
      let password = "Cimb@2023"
        
      cy.get('input[formcontrolname="username"]').clear().type(username);
      cy.get('input[formcontrolname="password"]').clear().type(password);

      cy.wait(500)
      cy.get('button[mat-flat-button]',{timeout: 10000}).click();

      // verify login success
      cy.wait(3000) 
      cy.get('.items-start').contains(username).should('be.visible')

    })
})

export const login = () => {
};


