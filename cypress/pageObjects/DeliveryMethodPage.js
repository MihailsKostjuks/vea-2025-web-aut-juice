export class DeliveryMethodPage {
    static get standardDelivery() {
        return cy.get("mat-row").contains("Standard Delivery");
    }

    static get buttonContinue() {
        return cy.get("[aria-label='Proceed to delivery method selection']");
    }
}
