const { Builder } = require("selenium-webdriver");
const LoginPage = require("../pages/LoginPage");
const { expect } = require("chai");

describe("Login Page Test", function () {
    let driver, loginPage;

    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        loginPage = new LoginPage(driver);
    });

    after(async function () {
        await driver.quit();
    });

    it("User can log in successfully", async function () {
        await loginPage.open();
        await loginPage.login("standard_user", "secret_sauce");

        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).to.include("inventory.html");
    });
});
