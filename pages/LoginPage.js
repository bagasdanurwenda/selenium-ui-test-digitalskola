const { By } = require("selenium-webdriver");

class LoginPage {
    constructor(driver) {
        if (!driver) {
            throw new Error("❌ Driver tidak tersedia di LoginPage!");
        }
        this.driver = driver;
        this.usernameField = By.id("user-name");
        this.passwordField = By.id("password");
        this.loginButton = By.id("login-button");
    }

    async open() {
        console.log("🌍 Navigasi ke halaman login");
        await this.driver.get("https://www.saucedemo.com/");
    }

    async login(username, password) {
        console.log(`🔑 Login dengan: ${username} / ${password}`);
        await this.driver.findElement(this.usernameField).sendKeys(username);
        await this.driver.findElement(this.passwordField).sendKeys(password);
        await this.driver.findElement(this.loginButton).click();
    }
}

module.exports = LoginPage;
