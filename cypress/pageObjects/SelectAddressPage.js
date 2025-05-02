export class SelectAddressPage {
    static get matRow() {
        return cy.get("mat-row");
    }

    static get buttonContinue() {
        return cy.get("[aria-label='Proceed to payment selection']");
    }
}
