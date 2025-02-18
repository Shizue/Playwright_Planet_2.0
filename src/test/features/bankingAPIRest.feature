Feature: API Rest for Banking

  Background:
    Given API Rest for Banking is available

  Scenario: POST request to send transactions
    Then I send a POST request to transactions with valid data

  Scenario: POST request to send transactions with invalid data
    Then I send a POST request to transactions with invalid data

  Scenario: GET request to get transactions
    Then I send a GET request to transactions

  Scenario: GET request to get transactions with invalid data
    Then I send a GET request to transactions with invalid data

  Scenario: GET request to get balannce of an account
    Then I send a GET request to balance

  Scenario: GET request to get balance of an account with invalid data
    Then I send a GET request to balance with invalid data
