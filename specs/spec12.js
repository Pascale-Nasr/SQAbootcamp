describe('testing', function() {
    
    var obj = require('./object.js');

    it('whatever', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');

      obj.input1.sendKeys('7');
      
    browser.sleep(10000);
  });
  });