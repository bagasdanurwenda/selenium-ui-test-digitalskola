const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");
const { getDriver } = require("./config");

describe("SauceDemo UI Tests", function () {
    let driver;
    const browser = process.env.BROWSER || "chrome";
    const headless = process.env.HEADLESS === "true";

    before(async function () {
        driver = await getDriver(browser, headless);
    });

    after(async function () {
        await driver.quit();
    });

    it("1. User success login", async function () {
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce", Key.RETURN);

        await driver.wait(until.elementLocated(By.className("title")), 5000);
        const titleText = await driver.findElement(By.className("title")).getText();
        expect(titleText).to.equal("Products");
    });
});
