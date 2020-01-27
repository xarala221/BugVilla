/// <reference types="cypress" />
describe('Should Check Signup', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should not be empty', function () {
    cy.findByText(/signup/i)
      .click()
      .findByText(/name must be at least 6 characters/i)
  })
  it('Should report error if invalid inputs happen', function () {
    cy.findByPlaceholderText(/Enter Your Name/i)
      .focus()
      .type('John Doe{enter}myusername{enter}hazru.anurag@gmail.com');
    cy.findByPlaceholderText(/^password$/i)
      .focus()
      .type('fakepassword123{enter}fakepassword456{enter}')
      .findByText(/Confirm Password does not match/i)
    cy.findByPlaceholderText(/^confirm password$/i)
      .focus()
      .clear()
      .type('fakepassword123{enter}')
    cy.findByText(/Username \/ Email Already Exsist/i)
    cy.findByPlaceholderText(/example@gmail.com/i)
      .clear()
      .type('cypresstest@gmail.com')
      .findByText(/signup/i)
      .click();
    cy.findByText(/Please Select An Image/i)
  })
})