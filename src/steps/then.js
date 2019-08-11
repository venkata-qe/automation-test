
import {Then} from 'cucumber'

Then(/^I should see the following products$/, function(table) {
  const eProducts = table.raw();
  const aProducts = [];
  let elements = $$('#NewMortgageRateTables tr:nth-child(1)');
  elements.forEach(function (el) {
    aProducts.push(el.getAttribute('data-product-name').trimEnd());
  });
  assert.equalIgnoreCase(eProducts.toString(), aProducts.toString());
});
