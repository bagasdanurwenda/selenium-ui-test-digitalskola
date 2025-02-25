const { By, until } = require("selenium-webdriver");

class CheckoutPage {
    constructor(driver) {
        this.driver = driver;
        this.cartButton = By.className("shopping_cart_link");
        this.checkoutButton = By.id("checkout");
        this.firstNameField = By.id("first-name");
        this.lastNameField = By.id("last-name");
        this.postalCodeField = By.id("postal-code");
        this.continueButton = By.id("continue");
        this.finishButton = By.id("finish");
        this.confirmationMessage = By.className("complete-header");
    }
    
    async open() {
        await this.driver.get("https://www.saucedemo.com/cart.html");
    }

    async completeCheckout() {
        await this.driver.findElement(this.cartButton).click();
        await this.driver.findElement(this.checkoutButton).click();
        await this.driver.findElement(this.firstNameField).sendKeys("John");
        await this.driver.findElement(this.lastNameField).sendKeys("Doe");
        await this.driver.findElement(this.postalCodeField).sendKeys("12345");
        await this.driver.findElement(this.continueButton).click();
        await this.driver.findElement(this.finishButton).click();
    }

    async getConfirmationMessage() {
        return await this.driver.findElement(this.confirmationMessage).getText();
    }
}

module.exports = CheckoutPage;