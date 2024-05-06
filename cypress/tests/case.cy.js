import { it } from "mocha";
import { SRLeadManagement } from "../models/Page/SRLeadManagement";
import { productProgram } from "../support/variables.js";
const variables = require('../support/variables.js');

describe('Case management',() => {
    beforeEach(() => {
        cy.viewport(1440, 900)
    })
    it('Add new case',() => {
        //login
        cy.visit('/login')
        
        cy.get('input[formcontrolname="username"]').clear().type(variables.username);
        cy.get('input[formcontrolname="password"]').clear().type(variables.password);

        cy.get('button[mat-flat-button]',{timeout: 10000}).click();

        // verify login success
       
        cy.get('.items-start').contains(variables.username).should('be.visible')

        //navigation to case management
        cy.get('a').contains('Case Management').click()
        cy.get('h1').contains('Case Management').should('be.visible')

        // add new application
        cy.get('a[href="/case-management/create"]').click()
        cy.get('div').contains('Add Application').should('be.visible')

        // company information 
        cy.get('mat-select[formcontrolname="lead"]').click().focus()
        cy.get('mat-select[formcontrolname="lead"]').type(variables.UEN,{ delay :350})
        cy.get('span[class="mat-option-text"]').contains(variables.UEN).click()
        cy.get('input[formcontrolname="esgServiceVsGood"]').type('35.5')

        //Financing Required
        cy.get('#financingRequired').within(()=>{
            cy.get('mat-select[role="combobox"]').click()
            cy.get('input[class=]')
            cy.get('span[class="mat-option-text"]').contains(productProgram).click()
        })
        
    })
})