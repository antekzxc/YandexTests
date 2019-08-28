var loginPage = function(){

    this.loginField = element (by.css('#passp-field-login'));
    this.loginButton = element (by.css('#root > div > div > div.passp-flex-wrapper > div > div > div.passp-auth-content > div:nth-child(2) > div > div > div.passp-login-form > form > div.passp-button.passp-sign-in-button > button.control.button2.button2_view_classic.button2_size_l.button2_theme_action.button2_width_max.button2_type_submit.passp-form-button'));
    this.passwordField = element (by.css('#passp-field-passwd'));
    this.passwordButton = element (by.css('#root > div > div > div.passp-flex-wrapper > div > div > div.passp-auth-content > div.passp-route-forward > div > div > form > div.passp-button.passp-sign-in-button > button.control.button2.button2_view_classic.button2_size_l.button2_theme_action.button2_width_max.button2_type_submit.passp-form-button'));
    this.userNameErrorLabel = element (by.css('#root > div > div > div.passp-flex-wrapper > div > div > div.passp-auth-content > div:nth-child(2) > div > div > div.passp-login-form > form > div.passp-form-field.passp-form-field_filled.passp-form-field_failed > div.passp-form-field__error'));
    this.passwordErrorLabel = element (by.css('#root > div > div > div.passp-flex-wrapper > div > div > div.passp-auth-content > div.passp-route-forward > div > div > form > div.passp-password-field > div > div.passp-form-field__error'));

};
module.exports = new loginPage();