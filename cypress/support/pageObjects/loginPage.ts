export class Login {
    loginButtonLocator = '[data-cy=login-menu]'
    signUpLocator = 'Sign up here'
    emailTextLocator = '[data-cy=signup-email]'
    passwordTextLocator = '[data-cy=signup-password]'
    signUpButton = '[data-cy=signup]'

    openSignUp() {
        cy
            .get(this.loginButtonLocator)
            .click();

        cy
            .contains(this.signUpLocator)
            .click();
    }

    signUpAndLogin(email, password) {
        cy
            .get(this.emailTextLocator)
            .type(email);

        cy
            .get(this.passwordTextLocator)
            .type(password);
        cy
            .get(this.signUpButton)
            .click();
    }
}