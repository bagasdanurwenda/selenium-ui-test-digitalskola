const { By } = require("selenium-webdriver");

class ProductPage {
    constructor(driver) {
        this.driver = driver;
        this.addToCartButton = By.className("btn_inventory");
        this.cartBadge = By.className("shopping_cart_badge");
        this.cartIcon = By.className("shopping_cart_link");
    }

    async addItemToCart() {
        await this.driver.findElement(this.addToCartButton).click();
    }

    async getCartItemCount() {
        return await this.driver.findElement(this.cartBadge).getText();
    }

    async goToCart() {
        await this.driver.findElement(this.cartIcon).click();
    }
}

module.exports = ProductPage;
