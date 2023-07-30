const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("user able to see all the bots in the game", async () => {
    //navigate to the game app
    await driver.get("http://localhost:8000");
    //find the see all butoon, and click on it
    await driver.findElement(By.id('see-all')).click();
    //wait until the selected element with the id 'see-all' is selected
    await driver.wait(until.elementLocated(By.id('see-all')))
  });

  test('User is able to click on the Draw button, and is presented with div with id "choices"', async () => {
    //navigate to the app
    await driver.get("http://localhost:8000")
    //find the draw button, and click on it
    await driver.findElement(By.css('button[id="draw"]')).click()
    //wait to see if it displays the div with id=choices
    await driver.wait(until.elementLocated(By.css('#choices')))
  });

});