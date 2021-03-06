/**
 * Fill Change Password Form with given data
 */

let router = require('../../route.js');
let elements = require(router.locators);

exports.command = function (oldPassword, newPassword) {

    this.waitForElementVisible(elements.profilePage.accountmenu, 10000);
    this.pause(1000);
    this.click(elements.profilePage.accountmenu);
    this.pause(2000);
    this.click(elements.profilePage.changePassword.changePasswordLinkLocator);
    this.pause(5000); // wait to expand the input fields
    this.waitForElementVisible(elements.profilePage.changePassword.changePasswordDivLocator, 10000, false);
    this.pause(1000);
    this.setValue(elements.profilePage.changePassword.oldPasswordLocator, oldPassword);
    this.pause(1000);
    this.setValue(elements.profilePage.changePassword.newPasswordLocator, newPassword);
    this.setValue(elements.profilePage.changePassword.confirmPasswordLocator, newPassword);

    return this;
};