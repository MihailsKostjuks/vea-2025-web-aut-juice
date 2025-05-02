import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get buttonDismissWelcome() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get buttonDismissCookie() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get buttonAccountMenu() {
    return cy.get("#navbarAccount");
  }

  static get buttonLogin() {
    return cy.get("#navbarLoginButton");
  }

  static get buttonUserProfile() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get inputSearchQuery() {
    return cy.get("#searchQuery");
  }

  static get inputSearchBox() {
    return cy.get("#mat-input-0");
  }

  static get cardProduct() {
    return cy.get("mat-card");
  }

  static get dialogContainer() {
    return cy.get("mat-dialog-container");
  }

  static get buttonCloseDialog() {
    return cy.get("[aria-label='Close Dialog']");
  }

  static get buttonExpandReviews() {
    return cy.get("mat-expansion-panel").contains("Reviews");
  }

  static get panelReviewContent() {
    return cy.get(".mat-expansion-panel-content");
  }

  static get textareaReview() {
    return cy.get("[aria-label='Text field to review a product']");
  }

  static get buttonSubmitReview() {
    return cy.get("#submitButton");
  }

  static get selectProductOption() {
    return cy.get("mat-select");
  }

  static get selectOption() {
    return cy.get("mat-option");
  }

  static get buttonAddToCart() {
    return cy.get("[aria-label='Add to Basket']");
  }

  static get buttonCart() {
    return cy.get("[aria-label='Show the shopping cart']");
  }

  static get buttonOrdersAndPayments() {
    return cy.get("button").contains("Orders & Payment");
  }

  static get buttonSavedAddresses() {
    return cy.get("[aria-label='Go to saved address page']");
  }

  static get buttonMyPaymentOptions() {
    return cy.get("button").contains("My Payment Options");
  }
}
