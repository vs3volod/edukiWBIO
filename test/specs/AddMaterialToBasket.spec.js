const EdukiPage = require('../pageobjects/edukipages');

describe("Eduki tests", function () {
    it('Add material to basket', async () => {

        await EdukiPage.openStartingBrowserPage();

        //click accept button
        await EdukiPage.clickAcceptCookiesButton();

        //title, author,price consts
        const startingTitle = await EdukiPage.getStartingTitle();
        const startingPrice = await EdukiPage.getStartingPrice();
        const startingAuthorName = await EdukiPage.getStartingAuthorName();

        //click add to cart button
        await EdukiPage.clickAddToCartButton();

        //click go to cart button
        await EdukiPage.clickGoToCartButton();

        //get current browser url
        await EdukiPage.changeBrowserUrl();

        //validate title, price, author
        await EdukiPage.validateMaterialTitle(startingTitle);
        await EdukiPage.validateMaterialPrice(startingPrice);
        await EdukiPage.validateMaterialAuthorName(startingAuthorName);
    })
})