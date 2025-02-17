Feature: User fill in formt to transfer funds

  Background:
    Given User navegate to the application

   Scenario: Check if the form is displayed
     Then I should see the form

  Scenario: Check if the ALL fields are displayed
    Then I should see the fields

  Scenario: User fills in the form to transfer funds
    When I fill in the form with valid data
    And I submit the form
    Then I should see a success message

  Scenario: User fills in the form with invalid data
    When I fill in the form with invalid data
    And I submit the form
    Then I should see an error message
