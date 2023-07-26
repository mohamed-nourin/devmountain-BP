const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;



beforeEach(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get("http://localhost:3001/");
});

afterEach(async () => {
    await driver.quit();
});

describe('Tests the Movies App', () => {
    test('can add a movie', async () => {
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('The Matrix');
        await driver.findElement(By.css('button[type="submit"]')).click();
        const addedMovie = await driver.wait(until.elementLocated(By.css('#movies-list li label')), 5000);
        expect(await addedMovie.getText()).toBe('The Matrix');
    });

    test('can delete a movie', async () => {
        // Add a movie first so we can delete it
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('The Terminator');
        await driver.findElement(By.css('button[type="submit"]')).click();

        // Find the first movie in the list
        const firstMovieElement = await driver.findElement(By.css('.movie-item'));

        // Find and click the delete button for the movie
        const deleteButton = await firstMovieElement.findElement(By.css('.delete-button'));
        await deleteButton.click();

        // Check if the movie is no longer in the list
        const isMoviePresent = await driver.findElements(By.css('.movie-item')).then(elements => elements.length > 0);
        expect(isMoviePresent).toBe(false);
    });

    test('displays notification when adding a movie', async () => {
        const newMovieName = 'Inception';
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys(newMovieName);
        await driver.findElement(By.css('button[type="submit"]')).click();

        // Wait for the notification to be displayed
        await driver.wait(until.elementLocated(By.css('.notification')), 5000);

        // Find the notification element
        const notificationElement = await driver.findElement(By.css('.notification'));

        // Check if the notification contains the correct message
        const notificationMessage = await notificationElement.getText();
        const expectedNotification = `Movie "${newMovieName}" added successfully!`;
        expect(notificationMessage).toBe(expectedNotification);
    });
});
// describe("Tests the Movies App", () => {
//     test("can add a move", async () => {
//         await driver.get('http://localhost:3001/');
//         await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys("The Matrix");
//         await driver.findElement(By.css('button[type="submit"]')).click()
//         const addMovie = await driver.wait(until.elementLocated(By.css('#movies-list li label')), 5000)
//         expect(await addMovie.getText()).toBe('The Matrix');

//     })
// });

//     test("can delete a movie", async ()  => {
//         //Navigate to the web app => http://localhost:3001/
//         await driver.get("http://localhost:3001/");
//         //Find the first movie in the list
//         await driver.findElement(By.css('.movie-item'));
//         //Find and click the delete button for the movie
//         await firstMovieElement.findElement(By.css('.delete-button'));
//         await deleteButton.click();
//         //Check if the movie is no longer in the list
//         await driver.findElements(By.css('.movie-item'))
//             .then(elements => elements.length > 0);

    
//     })
    


// beforeAll(async () => {
//     driver = new Builder().forBrowser(Browser.CHROME).build();
// });

// afterAll(async () => {
//     await driver.quit();
// });