import {BasePage} from "./BasePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get elementName() {
    return cy.get("elementSelector");
  }

  static get inputEmail() {
    return cy.get("#email");
  }

  static get inputPassword() {
    return cy.get("#password");
  }

  static get buttonLogin() {
    return cy.get("#loginButton");
  }

  static get buttonRegisterRedirect() {
    return cy.get("#newCustomerLink");
  }

  static get emailControl() {
    return cy.get("#emailControl");
  }

  static get passwordControl() {
    return cy.get("#passwordControl");
  }

  static get repeatPasswordControl() {
    return cy.get("#repeatPasswordControl");
  }

  static get selectSecurityQuestion() {
    return cy.get('mat-select[name="securityQuestion"]');
  }

  static get selectOptionFavoritePet() {
    return cy.get("#mat-option-9");
  }

  static get inputSecurityAnswer() {
    return cy.get("#securityAnswerControl");
  }

  static get buttonRegister() {
    return cy.get("#registerButton");
  }
}
