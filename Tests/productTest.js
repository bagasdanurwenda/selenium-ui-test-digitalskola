const { Builder } = require("selenium-webdriver");
const LoginPage = require("../pages/LoginPage");
const ProductPage = require("../pages/ProductPage");
const { expect } = require("chai");

describe("Product Page Test", function () {
    let driver, loginPage, productPage;

    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        loginPage = new LoginPage(driver);
        productPage = new ProductPage(driver);
        await loginPage.open();
    });

    after(async function () {
        await driver.quit();
    });

    it("User can add an item to the cart", async function () {
        await loginPage.login("standard_user", "secret_sauce");
        await productPage.addItemToCart();

        const cartCount = await productPage.getCartItemCount();
        expect(cartCount).to.equal("1");
    });
});
