Feature: Automate Flipkart Application

  Scenario: Launch the URL & Do a Product search
    Given I open the Flipkart website
    When I search for a product
    And I select a product
    And I add the product to the cart
    And I proceed to checkout
    And I login to the application and enter otp
    And I should be able to place the order successfully
    And I select the delivery address
    And I select the payment option
    And I have products in the cart
    And I remove a product from the cart
    And The cart should be empty
    Then I quit the browser
