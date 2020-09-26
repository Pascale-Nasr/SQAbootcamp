describe('Users Management', function() {
    it('Open Angularjs WEbsite', function() {
        
        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('7');
        element(by.id('gobutton')).click();


        element(by.model('first')).sendKeys('6');
        element(by.model('second')).sendKeys('10');
        element(by.id('gobutton')).click();

        
        element(by.model('first')).sendKeys('7');
        element(by.model('second')).sendKeys('8');
        element(by.id('gobutton')).click();

        element(by.model('first')).sendKeys('4');
        element(by.model('second')).sendKeys('7');
        element(by.id('gobutton')).click();


        element.all(by.repeater('result in memory')).count().then(function(result){
            console.log(result);
        });

        element.all(by.repeater('result in memory')).each(function(answer){
            answer.element(by.css("td:nth-child(3)")).getText().then(function(result){
                console.log(result);
                //expect(answer.isDisplayed()).toBe(true); to see if it is displayed or not on the web
                //expect().toBe(true); use an array 
            });
            
        });

        browser.sleep(10000);

        /*element.all(by.css('.items li')).each(function(element, index) {
            // Will print 0 First, 1 Second, 2 Third.
            element.getText().then(function (text) {
              console.log(index, text);
            });
          });*/
      
    });
  });
