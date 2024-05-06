import { it } from "mocha";
import { SRLeadManagement } from "../models/Page/SRLeadManagement";
import { productProgram } from "../support/variables.js";
const variables = require('../support/variables.js');
describe('lead management', () => {


    it('Create lead success with full information', () => {
        cy.visit('/login')
        
        cy.get('input[formcontrolname="username"]').clear().type(variables.username);
        cy.get('input[formcontrolname="password"]').clear().type(variables.password);

        cy.get('button[mat-flat-button]',{timeout: 10000}).click();

        // verify login success
       
        cy.get('.items-start').contains(variables.username).should('be.visible')


        // navigation to lead management screen
        cy.get('a').contains('Lead Management').click()
        cy.get('button').contains('New Lead').click()
        cy.get('div').contains('Add New Lead').should('be.visible')

        // test with component
        const srLeadManagement = new SRLeadManagement
        srLeadManagement.leadComponent().AddLead.type('heeeeeehh')


        //verify cancel button
        cy.get('button[type="button"]').contains('Cancel').click()
        cy.get('div').contains('Add New Lead').should('not.exist')
        
        //reopen screen form
        cy.get('button').contains('New Lead').click()
        cy.get('div').contains('Add New Lead').should('be.visible')


        //verify required field
        cy.get('button[type="button"]').contains('Save').click()
        cy.get('mat-error').contains('Please enter this field!').then(item => {
            cy.get(item).should('be.visible')
        })

        //input information
        cy.get('input[formcontrolname="uen"]').type(variables.UEN)
        cy.get('input[formcontrolname="contactName"]').type('TuanAnh')
        cy.get('input[formcontrolname="revenue"]').type('1000000')
        cy.get('input[formcontrolname="hashtag"]').type('tuananh')
        cy.get('input[formcontrolname="companyName"]').type(variables.companyName)
        cy.get('input[formcontrolname="phoneNumber"]').type(variables.phoneNumber)

        // verify email format
        cy.get('input[formcontrolname="contactEmail"]').type('InvaliEemailFormat') 
        cy.get('mat-error').contains('Please type a correct email format!').should('be.visible')
        cy.get('input[formcontrolname="contactEmail"]').clear().type('anhle.sme@yopmail.com')
        


        cy.get('textarea[formcontrolname="remark"]').type('Remark')
        

    
        
        cy.get('.mat-select-value').eq(1).click()
        cy.get('div[role="listbox"]').should('be.visible')
        cy.get('input[type="text"][placeholder="Search..."]').eq(1).type(productProgram)
        cy.get('span[class="mat-option-text"]').contains('TA Product').click()
        //cy.get('span[class="mat-select-min-line"]').invoke('text').should('eq','BIZ_GROW_AIP')
        


        /* list of source
         1. RM
         2. BROKER
         3. BRANCH
         4. COLD_CALL
         5. CROSS_BORDER_REF
         6. CUSTOMER_REF
         7. ETB
         8. EXT_PARTNER_REF
         9. MC
         10. ME
         11. REF_BANK
         12. PRIVATE_BANK
         13. RM_CONTACT
         14. SENIOR_MANAGER
         15. SME
         16. WB_IB
         17. OTHER
        */
        cy.get('.mat-select-value').eq(2).click()
        cy.get('div[role="listbox"]').should('be.visible')
        cy.get('mat-option[ng-reflect-value="RM"]').click()
        
        /* list of status
        1. NEW
        2. PENDING_INFO
        3. PENDING
        4. VERIFIED
        5. APPLICATION_SUBMITTED
        6. ABORT
        */
        cy.get('.mat-select-value').eq(3).click()
        cy.get('div[role="listbox"]').should('be.visible')
        cy.get('mat-option[ng-reflect-value="NEW"]').click()

        // submit
        cy.get('button[type="button"]').contains('Save').click()
        
    })

/* verify new lead in list of leads
    it('Verify new lead in list of leads',() => {

    })
*/
});

