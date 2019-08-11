Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide

  @mortgages
  Scenario: Find mortgage rates
    Given I open the url "https://www.nationwide.co.uk"
    And I navigate to the New mortgage customer rates screen
    And I select "no" for the Do you have a Nationwide mortgage? option
    And I select "I'm changing lender" for the What type of mortgage are you looking for? option
    And I enter "300,000" on the Property field
    And I enter "150,000" on the Mortgage field
    And I enter "30" on the Term field
    When I click on the Find a mortgage rate button
    And I select the Mortgage type filter to Fixed rate
    And I select the Product fee filter to With fee
    Then I should see the following products
       | 2 yr  Fixed    |
       | 3 yr  Fixed   |
       | 5 yr  Fixed   |
       | 10 yr  Fixed  |

