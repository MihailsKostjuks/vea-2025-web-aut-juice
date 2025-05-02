export class CreateAddressPage {
    static get inputCountry() {
        return cy.get("input[placeholder='Please provide a country.']");
    }

    static get inputName() {
        return cy.get("input[placeholder='Please provide a name.']");
    }

    static get inputMobileNumber() {
        return cy.get("input[placeholder='Please provide a mobile number.']");
    }

    static get inputZipCode() {
        return cy.get("mat-label").contains("ZIP Code");
    }

    static get inputAddress() {
        return cy.get("#address");
    }

    static get inputCity() {
        return cy.get("input[placeholder='Please provide a city.']");
    }

    static get inputState() {
        return cy.get("input[placeholder='Please provide a state.']");
    }

    static get buttonSubmit() {
        return cy.get("#submitButton");
    }
}
