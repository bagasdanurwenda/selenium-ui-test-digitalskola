const { Builder, By, Key, until } = require("selenium-webdriver");

async function runTest() {
  // Setup browser
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // 1. User success login
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce", Key.RETURN);

    // 2. Validate user berada di dashboard setelah login
    await driver.wait(until.elementLocated(By.className("title")), 5000);
    let pageTitle = await driver.findElement(By.className("title")).getText();
    console.log("Page Title:", pageTitle);
    if (pageTitle !== "Products") {
      throw new Error("Login gagal atau dashboard tidak tampil.");
    }

    // 3. Add item to cart
    await driver.findElement(By.css(".inventory_item button")).click();

    // 4. Validate item sukses ditambahkan ke cart
    let cartBadge = await driver.findElement(By.className("shopping_cart_badge")).getText();
    console.log("Cart Count:", cartBadge);
    if (cartBadge !== "1") {
      throw new Error("Item tidak berhasil ditambahkan ke cart.");
    }

    console.log("Test berhasil!");
  } catch (error) {
    console.error("Test gagal:", error);
  } finally {
    // Tutup browser
    await driver.quit();
  }
}

// Jalankan test
runTest();
