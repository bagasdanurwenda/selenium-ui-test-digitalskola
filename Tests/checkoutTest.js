const { expect } = require("chai");
const { getDriver } = require("../config");
const LoginPage = require("../pages/LoginPage");
const CheckoutPage = require("../pages/CheckoutPage"); // Pastikan path benar!

describe("Checkout Page Test", function () {
    this.timeout(40000); // Set timeout yang cukup

    let driver;
    let loginPage;
    let checkoutPage;

    before(async function () {
        driver = await getDriver("chrome", false);
        loginPage = new LoginPage(driver);  // Pastikan loginPage dibuat
        checkoutPage = new CheckoutPage(driver); // Pastikan checkoutPage dibuat
    });

    after(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it("User can complete checkout", async function () {
        await loginPage.open(); 
        await loginPage.login("standard_user", "secret_sauce");

        await checkoutPage.open(); // **Pastikan tidak error**
        await checkoutPage.completeCheckout();

        const confirmationText = await checkoutPage.getConfirmationMessage();
        expect(confirmationText).to.include("Thank you for your order!");
    });
});
