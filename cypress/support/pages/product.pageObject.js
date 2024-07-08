import PageObject from '../PageObject';

export class ProductPageObject extends PageObject {
  url = '/index.html';

  clickOnProduct(product) {
    cy.contains('.card-title', product).click();
  }

  addProductToCart() {
    cy.contains('.btn-success', 'Add to cart').click();
  }
}
