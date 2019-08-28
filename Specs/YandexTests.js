describe('passport yandex test', function () {

    let loginPage = require('../PO/loginPage');
    let AccountPage = require('../PO/AccountPage');

    let dataFile = require ('../Fixtures/data.json');
    let validloginName = dataFile["validloginName"];
    let validPassword = dataFile["validPassword"];
    let emptyPassword = dataFile["emptyPassword"];
    let invalidLoginName = dataFile["invalidLoginName"];


    it('TC1 yandex account login test with invalid name', function () {

        loginPage.loginField.sendKeys(invalidLoginName);
        loginPage.loginButton.click();
        expect(loginPage.userNameErrorLabel.getText()).toEqual('Такой логин не подойдет');

    });

    it('TC2 yandex account login test with empty password', function () {

        loginPage.loginField.clear();
        loginPage.loginField.sendKeys(validloginName);
        loginPage.loginButton.click();
        loginPage.passwordField.sendKeys(emptyPassword);
        loginPage.passwordButton.click();
        expect(loginPage.passwordErrorLabel.getText()).toEqual('Пароль не указан');


    });

    it('TC3 Successfull yandex account login test', function () {


        loginPage.passwordField.clear();
        loginPage.passwordField.sendKeys(validPassword);
        loginPage.passwordButton.click();
        expect(AccountPage.accNameField.getText()).toEqual('test name');

    });


});