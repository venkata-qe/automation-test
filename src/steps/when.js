
import { When } from 'cucumber';

import searchMortgagePage from "../support/pageobjects/searchMortgage.page";

When(/^I click on the Find a mortgage rate button$/, function() {
  searchMortgagePage.clickMortgageRateButton();
  browser.pause(5000);
});

When(/^I select the Mortgage type filter to Fixed rate$/, function () {

  searchMortgagePage.selectFixedMortgageFilter();
  });

When(/^I select the Product fee filter to With fee$/, function () {
  searchMortgagePage.selectProductWithFeeFilter();
});
