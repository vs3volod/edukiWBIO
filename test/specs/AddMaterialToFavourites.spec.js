const EdukiPage = require('../pageobjects/edukipages');

describe("Eduki tests", function () {
    it('Add material to favourites', async () => {
        
        await EdukiPage.openStartingBrowserPage();

        //accept cookies
        await EdukiPage.clickAcceptCookiesButton();

        //title, author,price consts
        const startingTitle = await EdukiPage.getStartingTitle();
        const startingPrice = await EdukiPage.getStartingPrice();
        const startingAuthorName = await EdukiPage.getStartingAuthorName();

        //click add to favourites button 
        await EdukiPage.clickAddToFavouritesButton();

        //enter email and password 
        await EdukiPage.login('lispuhv@gmail.com', 'edukiTestPassword');

        //click login button
        await EdukiPage.clickLoginButton();
        await browser.pause(3500);

        //click go to favourites button
        await EdukiPage.clickGoToFavouritesButton();
        
        //validate Material info
        await expect($('.title')).toHaveTextContaining(startingTitle);
        await expect($('.price-block ')).toHaveTextContaining(startingPrice);
        await expect($('.highlighted-link')).toHaveTextContaining(startingAuthorName);
    })
});