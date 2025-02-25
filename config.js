const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");


async function getDriver(browser = "chrome", headless = false) {
    console.log(`🔄 Meluncurkan browser: ${browser}, mode headless: ${headless}`);

    let options = new chrome.Options();
    if (headless) {
        options.headless();
    }

    // Tambahkan opsi untuk mengabaikan error SSL
    options.addArguments("--ignore-certificate-errors");
    options.addArguments("--disable-blink-features=AutomationControlled");
    options.addArguments("--disable-web-security");
    options.addArguments("--allow-running-insecure-content");


    let driver = await new Builder()
        .forBrowser(browser)
        .setChromeOptions(options)
        .build();

    console.log("✅ WebDriver berhasil dimulai");
    return driver;
}

module.exports = { getDriver };
