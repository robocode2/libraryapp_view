import { getLoginButton } from "../support/utils";

describe("Home", () => {
  it("can log in and view browsing page", () => {
    cy.login();
    cy.visit("http://localhost:3000/browse");
  });

  it("can add a book and check it exists", () => {
    cy.get("input[type=title]").click().type("Hunchback of Notre-Dame");
    cy.get("input[type=ISBN]").click().type("9781551681610");
    cy.get("input[type=Description]")
      .click()
      .type("A tale of a person with a hunchback in love with Paris");
    cy.contains("Submit").click();
    cy.visit("http://localhost:3000/browse");
  });

  it("can add a book to a list and check it exists", () => {
    cy.contains("Hunchback of Notre-Dame")
      .parent()
      .contains("Clickable Inside")
      .click();
    cy.contains("favourites seed").click({ force: true });
    cy.visit("http://localhost:3000/profile");
    cy.contains("Clickable Inside").click();
    cy.contains("favourites seed").click({ force: true });
    cy.contains("Hunchback of Notre-Dame").click();
  });


  /* it("can add a book to a list and check it exists then remove it", () => {
    cy.contains("test").parent().contains("Clickable Inside").click();
    cy.contains("favourites seed").click({ force: true });
    cy.visit("http://localhost:3000/profile");
    cy.contains("Clickable Inside").click();
    cy.contains("favourites seed").click({ force: true });
    cy.contains("test").parent().contains("Delete from list").click();
    cy.visit("http://localhost:3000/profile");
    cy.contains("Clickable Inside").click();
    cy.contains("favourites seed").click({ force: true });
    cy.contains("test").click();
  }); */

  /*  afterEach(() => {
    cy.logout();
  }); */
});
