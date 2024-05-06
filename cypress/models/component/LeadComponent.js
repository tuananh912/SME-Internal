export class LeadComponent {
    
    static COMP_SEL = '.cdk-overlay-pane';

    constructor(component){
        this.component = component;
    }

    get AddLead(){
        return this.component.find('input[formcontrolname="uen"]')
    }
}
