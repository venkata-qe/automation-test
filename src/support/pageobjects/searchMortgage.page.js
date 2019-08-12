import Page from './page';

class SearchMortgagePage extends Page {

    get nationwideMortgageUser() { return browser.element('#selectorItemHaveNationwideMortgage0'); }

   get nonNationwideMortgageUser() { return browser.element('#selectorItemHaveNationwideMortgage1'); }

   get firstTimeBuyerMortgage() { return browser.element('#selectorItemNationwideMortgageTypeNo0'); }

   get movingHomeMortgage() { return browser.element('#selectorItemNationwideMortgageTypeNo1'); }

   get changingLenderMortgage() { return browser.element('#selectorItemNationwideMortgageTypeNo2'); }

   get propertyValue() { return browser.element('#SearchPropertyValue'); }

   get mortgageValue() { return browser.element('#SearchMortgageAmount'); }

   get mortgageTerm() { return browser.element('#SearchMortgageTerm'); }

   get mortgageRateButton() { return browser.element('#myButton'); }

   get fixedMortgageTypeCheckbox() { return browser.element('//label[contains(text(),\'Fixed rate\')]'); }

   get productWithFeeCheckbox() { return browser.element('//label[contains(text(),\'With fee\')]'); }

   get updateFiltersOverlay() { return browser.element('#updatingOverlay'); }

   get mortgagesSearchOverlay() { return browser.element('#searchingOverlayTitle'); }

    isNationwideMortgageHolder(option) {
      if (option.toUpperCase() === "YES") {
        this.nationwideMortgageUser.waitForVisible();
        this.nationwideMortgageUser.click();
       console.log(`Nationwide Mortgage Holder option selected to Yes`)
      }
      else if (option.toUpperCase() === "NO") {
        this.nonNationwideMortgageUser.waitForVisible();
        this.nonNationwideMortgageUser.click();
        console.log(`Nationwide Mortgage Holder option selected to No`)
      }
      else {
       console.log(`Invalid Option: ${option} elected for isNationwideMortgageHolder option`)
      }
    }

    selectMortgageType(mortgageType) {
     if(mortgageType.includes("I'm buying my first home")){
       this.firstTimeBuyerMortgage.waitForVisible();
       this.firstTimeBuyerMortgage.click();
       console.log(`Nationwide Mortgage Type option selected to ${mortgageType} `)
     }
     else if(mortgageType.includes("I'm moving home")){
       this.movingHomeMortgage.waitForVisible();
       this.movingHomeMortgage.click();
       console.log(`Nationwide Mortgage Type option selected to ${mortgageType} `)
     }
     else if(mortgageType.includes("I'm changing lender")){
       this.changingLenderMortgage.waitForVisible();
       this.changingLenderMortgage.click();
       console.log(`Nationwide Mortgage Type option selected to ${mortgageType} `)
     } else {
       console.log(`Invalid Option: ${mortgageType} selected for mortgage types`)
     }
    }

    setPropertyValue(pValue) {
     this.propertyValue.waitForVisible();
     this.propertyValue.setValue(pValue);
    }

    setMortgageValue(mValue) {
      this.mortgageValue.waitForVisible()
      this.mortgageValue.setValue(mValue);
    }

    setMortgageTerm(tValue) {
     this.mortgageTerm.waitForVisible();
     this.mortgageTerm.setValue(tValue);
    }

    clickMortgageRateButton() {
        this.mortgageRateButton.waitForVisible();
        this.mortgageRateButton.click();
        this.mortgagesSearchOverlay.waitForVisible(8000, true)
    }

    selectFixedMortgageFilter() {
        this.fixedMortgageTypeCheckbox.waitForVisible(5000);
        this.fixedMortgageTypeCheckbox.click();
        this.updateFiltersOverlay.waitForVisible(5000, true);
    }

    selectProductWithFeeFilter() {
        this.productWithFeeCheckbox.waitForVisible(5000);
        this.productWithFeeCheckbox.click();
        this.updateFiltersOverlay.waitForVisible(5000, true);
    }
}

export default new SearchMortgagePage();
