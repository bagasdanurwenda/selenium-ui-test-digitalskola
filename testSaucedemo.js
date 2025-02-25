const { Builder } = require("selenium-webdriver");
const LoginPage = require("../pages/LoginPage");
const ProductPage = require("../pages/ProductPage");
const CheckoutPage = require("../pages/CheckoutPage");
const { expect } = require("chai");

describe("Checkout Flow Test", function () {
    let driver, loginPage, productPage, checkoutPage;

    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        loginPage = new LoginPage(driver);
        productPage = new ProductPage(driver);
        checkoutPage = new CheckoutPage(driver);
        await loginPage.open();
    });

    after(async function () {
        await driver.quit();
    });

    it("User can log in, add item, and checkout", async function () {
        await loginPage.login("standard_user", "secret_sauce");
        await productPage.addItemToCart();
        expect(await productPage.getCartItemCount()).to.equal("1");

        await productPage.goToCart();
        await checkoutPage.startCheckout();
        await checkoutPage.enterShippingDetails("John", "Doe", "12345");
        await checkoutPage.completeCheckout();

        const successMessage = await checkoutPage.getSuccessMessage();
        expect(successMessage).to.equal("Thank you for your order!");
    });
});
