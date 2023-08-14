class EdukiPage {

    async openStartingBrowserPage() {
        await browser.url('https://eduki.com/de/material/17537/vorlagen-und-hintergruenden-1');
    }

    get acceptCookiesButton() {
        return $('>>>button[data-testid="uc-accept-all-button"]');
    }

    get endTitle() {
        return $('[class="description"]');
    }

    get endPrice() {
        return $('[class="digits price-highlighted"]');
    }

    get endAtuthorName() {
        return $('[class="author-name"]');
    }

    get addToCartButton() {
        return $('[class="custom-button add-to-cart-btn yellow styled "]');
    }

    async clickAddToCartButton() {
        await this.addToCartButton.waitForExist();
        await this.addToCartButton.click();
    }

    get startingTitle() {
        return $('[class="title lmp-h-4"]');
    }

    async getStartingTitle() {
        await this.startingTitle.waitForExist();
        return await this.startingTitle.getText();
    }

    get startingPrice() {
        return $('[class="current-price sale"]');
    }

    async getStartingPrice() {
        await this.startingPrice.waitForExist();
        return await this.startingPrice.getText();
    }

    get startingAuthorName() {
        return $('[class="ellipsis public-name"]');
    }

    async getStartingAuthorName() {
        await this.startingAuthorName.waitForExist();
        return await this.startingAuthorName.getText();
    }

    get goToCartButton() {
        return $('.modal-content .yellow');
    }

    async clickGoToCartButton() {
        await this.goToCartButton.waitForExist();
        await this.goToCartButton.click();
    }

    async clickAcceptCookiesButton() {
        await this.acceptCookiesButton.waitForExist();
        await this.acceptCookiesButton.click();
    }

    async changeBrowserUrl() {
        const currentBrowserUrl = await browser.getUrl();
        const newBrowserUrl = currentBrowserUrl + "?cartTest=0";
        await browser.url(newBrowserUrl);
    }

    async validateMaterialTitle(materialTitle) {
        await expect(this.endTitle).toHaveTextContaining(materialTitle);
    }

    async validateMaterialPrice(materialPrice) {
        await expect(this.endPrice).toHaveTextContaining(materialPrice);
    }

    async validateMaterialAuthorName(materialAuthorName) {
        await expect(this.endAtuthorName).toHaveTextContaining(materialAuthorName);
    }

    get emailTextBox() {
        return $('#formBasicEmail');
    }

    get passwordTextBox() {
        return $('[type="password"]');
    }

    async login(email, password) {
        await this.emailTextBox.waitForExist();
        await this.passwordTextBox.waitForExist();

        this.emailTextBox.setValue(email);
        await browser.pause(500);
        this.passwordTextBox.setValue(password);
        await browser.pause(500);
    }

    get addToFavouritesButton() {
        return $('.favorite-icon');
    }

    async clickAddToFavouritesButton() {
        await this.addToFavouritesButton.waitForExist();
        await this.addToFavouritesButton.click();
    }

    get loginButton() {
        return $('[type="submit"]');
    }

    async clickLoginButton() {
        await this.loginButton.waitForExist();
        await this.loginButton.click();
    }

    get goToFavouritesButton() {
        return $('.heart-wrapper');
    }

    async clickGoToFavouritesButton() {
        await this.goToFavouritesButton.waitForExist();
        await this.goToFavouritesButton.click();
    }
}
module.exports = new EdukiPage();