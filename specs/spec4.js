describe('Users Management', function() {
    it('Open Angularjs WEbsite', function() {

        
            browser.waitForAngularEnabled(false);
        
            browser.get('https://www.google.com/');
            
      
            element(by.css("input[class='gLFyf gsfi']")).sendKeys('hello');
                browser.sleep(5000);

                element(by.css("input[class='gNO89b']")).click();
                browser.sleep(10000);
        

            //browser.waitForAngularEnabled(true);
        

    });
});