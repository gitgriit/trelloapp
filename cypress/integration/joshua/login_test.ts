import { Login } from '../../support/pageObjects/loginPage'

const login = new Login;

it('Login Test', () => {
    cy.visit('/');

    login.openSignUp();

    login.signUpAndLogin("example1@test.com", "1234");
});