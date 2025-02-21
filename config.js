const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");

async function getDriver(browser = "chrome", headless = false) {
    let driver;

    if (browser === "chrome") {
        let options = new chrome.Options();
        if (headless) options.headless();
        driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();
    } else if (browser === "firefox") {
        let options = new firefox.Options();
        if (headless) options.headless();
        driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
    } else {
        throw new Error("Browser not supported!");
    }

    return driver;
}

module.exports = { getDriver };
