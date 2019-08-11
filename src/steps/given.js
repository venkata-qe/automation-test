
import {Given} from 'cucumber'

import searchMortgagePage from '../support/pageobjects/searchMortgage.page';
import mortgagesMenuPage from '../support/pageobjects/mortgagesMenu.page';

Given(/^I open the url "([^"]*)"$/, (arg) => {
  mortgagesMenuPage.goToPage(arg);
});

Given('I navigate to the New mortgage customer rates screen', () => {
  mortgagesMenuPage.clickMortgageMenuTab();
  mortgagesMenuPage.selectMortgageRateOption();
});

Given(/^I select "([^"]*)" for the Do you have a Nationwide mortgage\? option$/, function (option) {
  searchMortgagePage.isNationwideMortgageHolder(option)
});

Given(/^I select "([^"]*)" for the What type of mortgage are you looking for\? option$/, function (mortgageType) {
  searchMortgagePage.selectMortgageType(mortgageType);
});

Given(/^I enter "([^"]*)" on the Property field$/, function (pValue) {
  searchMortgagePage.setPropertyValue(pValue)
});

Given(/^I enter "([^"]*)" on the Mortgage field$/, function (mValue) {
  searchMortgagePage.setMortgageValue(mValue);
});

Given(/^I enter "([^"]*)" on the Term field$/, function (tValue) {
  searchMortgagePage.setMortgageTerm(tValue)
});

