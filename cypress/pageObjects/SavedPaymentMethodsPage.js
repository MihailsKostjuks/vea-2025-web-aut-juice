export class SavedPaymentMethodsPage {
    static get addNewCard() {
        return cy.get("mat-panel-title").contains("Add new card");
    }

    static get name() {
        return cy.get("mat-form-field").contains("Name");
    }

    static get cardNumber() {
        return cy.get("mat-form-field").contains("Card Number");
    }

    static get inputMonth() {
        return cy.get("#mat-input-3");
    }

    static get inputYear() {
        return cy.get("#mat-input-4");
    }

    static get buttonSubmit() {
        return cy.get("#submitButton");
    }

    static get matRow() {
        return cy.get('mat-row');
    }
}
