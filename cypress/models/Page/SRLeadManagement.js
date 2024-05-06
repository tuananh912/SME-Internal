import { LeadComponent } from "../component/LeadComponent";

export class SRLeadManagement {

    leadComponent(){
        return new LeadComponent(cy.get(LeadComponent.COMP_SEL));
    }
}