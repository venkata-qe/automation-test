import Page from './page';
import { defineSupportCode } from 'cucumber';

class MortgagesMenuPage extends Page {

  get mortgageMainMenuTab() { return browser.element('#MortgagesNavItem'); }

  get mortgageRatesLink() { return browser.element('li a[href="/products/mortgages/our-mortgage-rates"]'); }

  goToPage(url) {
        super.open(url);
    }
      clickMortgageMenuTab() {
        this.mortgageMainMenuTab.waitForVisible();
        this.mortgageMainMenuTab.moveToObject();
    }
      selectMortgageRateOption() {
        this.mortgageRatesLink.waitForVisible(3000);
        this.mortgageRatesLink.click();
    }
}

export default new MortgagesMenuPage();
