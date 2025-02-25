const { getDriver } = require("./config");

async function testDriver() {
    console.log("🚀 Memulai test driver...");
    let driver = await getDriver("chrome", false); // Ubah ke true untuk headless
    await driver.get("https://www.google.com");
    console.log("🌍 Berhasil membuka Google");
    await driver.quit();
    console.log("✅ Test selesai");
}

testDriver();
