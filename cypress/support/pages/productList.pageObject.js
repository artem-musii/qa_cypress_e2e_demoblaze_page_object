import PageObject from '../PageObject';

export class ProductListPageObject extends PageObject {
  url = '/index.html';

  clickOnProduct(product) {
    cy.contains('.card-title', product).click();
  }
}
