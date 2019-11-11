const assert = require('assert');

describe('Handle Checkboxes', () => {

    beforeEach(function () {
      browser.url('http://omayo.blogspot.com');
    });

    it('should be checked', ()=> {
      // browser.url('http://omayo.blogspot.com');
      const checkbox_two = $('[type="checkbox"]:nth-child(2)');
      checkbox_two.scrollIntoView();
      browser.pause(3000);
      checkbox_two.click();
      browser.pause(3000);
    });

    it('dropdownhandle', () => {
      // browser.url('http://omayo.blogspot.com');
      $('#drop1').selectByVisibleText('doc 3');
      browser.pause(3000);
    })
});
