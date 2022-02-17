Feature: Robobar cart
  @focus
  Scenario: user add one cola
    Given user opens robobar webside
    When user adds a cola
    Then total should be €1.25

  @focus
  Scenario: user add two cola
    Given user opens robobar webside
    When user adds a cola
    And user adds a cola
    Then total should be €2.50

  @focus
  Scenario: user add one beer
    Given user opens robobar webside
    When user adds a beer
    Then total should be €2.00

  @focus
  Scenario: user add two beers
    Given user opens robobar webside
    When user adds a beer
    And user adds a beer
    Then total should be €4.00

  @focus
  Scenario: user add one wine
    Given user opens robobar webside
    When user adds a wine
    Then total should be €3.00

  @focus
  Scenario: user add two wines
    Given user opens robobar webside
    When user adds a wine
    And user adds a wine
    Then total should be €6.00

  @focus
  Scenario: user add one beer and age is 17
    Given user opens robobar webside
    When user adds a beer
    Then total should be €2.00
    When user press submit button
    And user enter his age is 17
    And user press order button
    Then alert is active

