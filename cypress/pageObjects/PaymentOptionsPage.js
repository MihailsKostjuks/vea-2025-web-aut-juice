export class PaymentOptionsPage {
    static get matRow() {
        return cy.get("mat-row");
    }

    static get buttonContinue() {
        return cy.get("[aria-label='Proceed to review']");
    }

    static get radioMat66() {
        return cy.get("mat-radio-button[id='mat-radio-66']");
    }
}
