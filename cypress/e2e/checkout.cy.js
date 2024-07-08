import { CartPageObject } from '../support/pages/cart.pageObject';
import FormPageObject from '../support/pages/form.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import { ProductPageObject } from '../support/pages/product.pageObject';
import { ProductListPageObject } from '../support/pages/productList.pageObject';

/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const productListPage = new ProductListPageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();
const formPage = new FormPageObject();

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide ability to checkout', () => {
    homePage.clickOnCategory('Laptops');
    productListPage.clickOnProduct('Sony vaio i7');
    productPage.addProductToCart();
    productPage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cartPage.checkTableCellContent('Sony vaio i7');
    cartPage.placeOrder();
    formPage.fillForm();
    formPage.submitForm();
    formPage.confirmOrder();
  });
});
