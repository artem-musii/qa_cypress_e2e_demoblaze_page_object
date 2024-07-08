import PageObject from '../PageObject';

export class CartPageObject extends PageObject {
  url = '/index.html';

  checkTableCellContent(content) {
    cy.get('td').should('contain', content);
  }

  placeOrder() {
    cy.contains('.btn-success', 'Place Order').click();
  }
}
