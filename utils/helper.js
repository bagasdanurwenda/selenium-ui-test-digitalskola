const fs = require("fs");

async function takeScreenshot(driver, name) {
    const screenshotDir = "screenshots";
    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir);
    }

    let image = await driver.takeScreenshot();
    fs.writeFileSync(`${screenshotDir}/${name}.png`, image, "base64");
}

module.exports = { takeScreenshot };
