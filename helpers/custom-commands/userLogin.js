/**
 * Login into application
 */
let router = require('../../route.js');
let elements = require(router.locators);

exports.command = function (email, password) {
    
    this.waitForElementVisible(elements.authPage.login.loginEmail, 10000);
    this.setValue(elements.authPage.login.loginEmail, email);
    this.setValue(elements.authPage.login.loginPassword, password);
    this.pause(3000);
    this.click(elements.authPage.login.loginSubmit);

    return this;
};

