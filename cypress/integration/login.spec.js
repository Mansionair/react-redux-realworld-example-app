/// <reference types="cypress" />

describe('Sign up', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4100/login');
  });

  it(`Redirect to home page on successful login`, () => {
    cy.get('[data-cy="email"]').type('kekw@kek.w');
    cy.get('[data-cy="password"]').type('kekwkekw');
    cy.get('[data-cy="login-form"]').submit();

    cy.hash().should('eq', '');
  });

  it(`Error message when email is invalid`, () => {
    cy.get('[data-cy="email"]').type('keks@kek.w');
    cy.get('[data-cy="password"]').type('kekwkekw');
    cy.get('[data-cy="login-form"]').submit();

    cy.get('.error-messages').contains('email or password is invalid');
  });

  it(`Error message when password is invalid`, () => {
    cy.get('[data-cy="email"]').type('kekw@kek.w');
    cy.get('[data-cy="password"]').type('kekskekw');
    cy.get('[data-cy="login-form"]').submit();

    cy.get('.error-messages').contains('email or password is invalid');
  });

  it(`Error messages when email and password are invalid`, () => {
    cy.get('[data-cy="email"]').type('keks@kek.w');
    cy.get('[data-cy="password"]').type('kekskekw');
    cy.get('[data-cy="login-form"]').submit();

    cy.get('.error-messages').contains('email or password is invalid');
  });

  it(`Link to SignUp page is presented`, () => {
    cy.get('a[href="/register"]');
  });
});

describe('Sign up', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4100/register');
  });

  it(`Redirect to home page on successful signup`, () => {
    cy.get('[data-cy=username]').type('Templarka');
    cy.get('[data-cy=email]').type('templarka@mail.com');
    cy.get('[data-cy=password]').type('taisthebest123');
    cy.get('[data-cy=signup-form]').submit();

    cy.hash().should('eq', '');
  });

  it(`Error message when email is blank`, () => {
    cy.get('[data-cy=username]').type('Meepo');
    cy.get('[data-cy=password]').type('meepoisgay');
    cy.get('[data-cy=signup-form]').submit();

    cy.get('.error-messages').contains(`email can't be blank`);
  });

  it(`Error message when password is blank`, () => {
    cy.get('[data-cy=username]').type('Meepo');
    cy.get('[data-cy=email]').type('meepo@mail.com');
    cy.get('[data-cy=signup-form]').submit();

    cy.get('.error-messages').contains(`password can't be blank`);
  });

  it(`Error message when username is blank`, () => {
    cy.get('[data-cy=email]').type('meepo@mail.com');
    cy.get('[data-cy=password]').type('meepoisgay');
    cy.get('[data-cy=signup-form]').submit();

    cy.get('.error-messages').contains(`username can't be blank`);
  });

  it(`Error messages when email, password, username are blank`, () => {
    cy.get('[data-cy=signup-form]').submit();

    cy.get('.error-messages').contains(`email can't be blank`);
    cy.get('.error-messages').contains(`username can't be blank`);
    cy.get('.error-messages').contains(`password can't be blank`);
  });

  it(`Error message when email is taken`, () => {
    cy.get('[data-cy=email]').type('templarka@mail.com');
    cy.get('[data-cy=signup-form]').submit();

    cy.get('.error-messages').contains(`email has already been taken`);
  });
});
