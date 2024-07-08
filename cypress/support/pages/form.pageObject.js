import { faker } from '@faker-js/faker';
import PageObject from '../PageObject';

class FormPageObject extends PageObject {
  url = '/index.html';

  fillForm() {
    cy.get('#name').type(faker.person.fullName());
    cy.get('#country').type(faker.location.country());
    cy.get('#city').type(faker.location.city());
    cy.get('#card').type(faker.finance.creditCardNumber());
    cy.get('#month').type(faker.date.month());
    cy.get('#year').type('2005');
  }

  submitForm() {
    cy.contains('.btn-primary', 'Purchase').click();
  }

  confirmOrder() {
    cy.contains('.confirm', 'OK').click();
  }
}

export default FormPageObject;
